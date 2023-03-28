import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Badge, ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {storeTimer} from "./StoreTimer";
import Box from "@mui/material/Box";
import {inputTimer} from "./type";
import {observer} from "mobx-react";

@observer
export class Timer4 extends React.Component<inputTimer, any> {
  constructor(props?: inputTimer) {
    super(props);
    this.state = {
      finishMessage: this.props?.messageTimer || storeTimer.timerMessage,
      counter4: this.props?.inputTime || storeTimer.timerBeginTime ,
      counterTemp: storeTimer.timerPauseTime, // ??? CHECK !!! поменять местами с counter4
      timer: 0, // Отсылка на таймер
      isRepeat: false,
      checkerLabel: '',
      activeTimer: true,
      functionTimer: this.props?.functionTimer || storeTimer.timerMakeFun,
      invisible: true,
    };
  }

  componentDidMount = () => {
    if (storeTimer.timerActive) {
      console.log('startTimer', ' counter4 = ', this.state.counter4)

      // ??? maybe delete str down > clearInterval
      clearInterval(this.state?.timer);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
      let timer = setInterval(this.callbackTimeout, 1000);
      // return () => clearInterval(timer);
      return this.setState({timer: timer});
    }
  }

  componentWillUnmount() {
    // storeTimer.timerActive = false;
    // storeTimer.timerBeginTime = 0;
    // clearInterval(this.state.timer);
    console.log('stopTimer1', this.state.counter4)
    console.log('stopTimer2', this.state.timer)
  }


  callbackTimeout = () => {
    // ??? возможно утечка памяти в this.state.timer
    // console.log('---', 'this.state.timer ', this.state.timer, 'this.state.counter4 ', this.state.counter4, 'this.state.isRepeat ', this.state.isRepeat)
    this.setState({counter4: (this.state.counter4 - 1)});
    if (storeTimer.timerActive && this.state.isRepeat && (this.state.counter4 === 0)) {// *** IS FINISH
      // console.log(' 5 ', this.state.finishMessage);
      storeTimer.timerMakeFun(); // *** действие при выполнении
      clearInterval(this.state.timer);
      clearInterval(this.state.counter4);
      this.setState({counter4: storeTimer.timerBeginTime});
      // storeTimer.timerShow();
    } else if (!this.state.isRepeat && (this.state.counter4 === 0)) {
      // console.log(' 7 ', this.state.finishMessage);
      storeTimer.timerMakeFun(); // *** действие при выполнении

      this.onClickStart();
    }
  }


  onClickStop = () => {
    storeTimer.clearPauseTime();
    storeTimer.timerActive = false;
    // storeTimer.timerActive = false;
    this.setState({counter4: 0});

    console.log('this.state.timer', this.state.timer);
    clearInterval(this.state.timer);
    console.log('this.state.timer', this.state.timer);

    console.log('this.state.counter4', this.state.counter4);
    clearInterval(this.state.counter4);
    console.log('this.state.counter4', this.state.counter4);

    this.handleBadgeVisibility();
    // this.componentWillUnmount();
  }

  onClickStart = () => {
    // console.clear();
    storeTimer.clearPauseTime();
    clearInterval(this.state.timer);
    clearInterval(this.state.counter4);
    this.setState({counter4: storeTimer.timerBeginTime});
    if (this.state.counter4 > 0) {
      storeTimer.timerActive = true;
      // console.log('onClickStart', this.state.counter4);
      this.handleBadgeInVisibility();
      return this.componentDidMount();
    }
  }
  onClickPause = () => {
    storeTimer.timerPauseTime = this.state.counter4;
    clearInterval(this.state.timer);
    this.handleBadgeVisibility();
  }
  onClickResume = () => {
    this.setState({counter4: storeTimer.timerPauseTime});
    this.handleBadgeInVisibility();
    return this.componentDidMount();
  }
//=================================================================
  checkSwitch = event => {
    this.setState({isRepeat: !this.state.isRepeat});
  }

  handleBadgeVisibility = () => {
    this.setState({invisible: false});
  };
  handleBadgeInVisibility = () => {
    this.setState({invisible: true});
  };
  onClickPlus = () => {
    storeTimer.increment();
    this.handleBadgeVisibility();
  };
  onClickMinus = () => {
    storeTimer.decrement();
    this.handleBadgeVisibility();
  };



  render() {
    return (
      <div className="Timer4">
        <span>[ counterTemp:{this.state.counterTemp} ]</span><span>   </span>
        <span>[ counter4:{this.state.counter4} ]</span><span>   </span>
        <span>[ timerBeginTime:{storeTimer.timerBeginTime} ]</span><span>   </span>
        <span>[ timerPauseTime:{storeTimer.timerPauseTime} ]</span><span>   </span>
        <span>[ timerActive:{storeTimer.timerActive} ]</span><span>   </span>
        <br/><hr/><br/>
        <Box>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={storeTimer.timerBeginTime}
            color="error"
            invisible={this.state.invisible}
            // onClick={this.handleBadgeVisibility}
          >

            <Badge badgeContent={this.state.counter4} showZero color="primary">
              {/*<Badge badgeContent={time_up} color="primary">*/}
              <AccessTime color="action"/>

            </Badge>
          </Badge>
          <span>   </span>
          {/*<span>[ {this.state.counter4} ]</span>*/}
          <Button
            aria-label="increase"
            onClick={this.onClickPlus}
            variant="contained"
          >
            <AddIcon fontSize="small"/>
          </Button>
          <Button
            aria-label="reduce"
            onClick={this.onClickMinus}
            variant="contained"
          >
            <RemoveIcon fontSize="small"/>
          </Button>
          <FormControlLabel control={<Switch defaultChecked/>}
                            onChange={this.checkSwitch}
                            label='repeat'
                            color={'inherit'}
          />
          {/* label={this.state.checkerLabel} */}
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={this.onClickStart}>Start</Button>
            <Button onClick={this.onClickStop}>Stop </Button>
            <Button onClick={this.onClickPause}>Pause</Button>
            <Button onClick={this.onClickResume}>Resume</Button>
          </ButtonGroup>
        </Box>
      </div>
    );
  }
}