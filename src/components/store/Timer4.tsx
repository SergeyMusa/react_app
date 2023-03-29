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
import {number} from "prop-types";

@observer
export class Timer4 extends React.Component<inputTimer, any> {
  timerId: any ;
  constructor(props?: inputTimer) {
    super(props);
    // this.timerId = 0; // таймер
    this.state = {
      finishMessage: this.props?.messageTimer || storeTimer.timerMessage,
      counter4: this.props?.inputTime || storeTimer.timerBeginTime,
      counterTemp: storeTimer.timerPauseTime, // ??? CHECK !!! поменять местами с counter4

      isRepeat: storeTimer.timerRepeat,
      // checkerLabel: '',
      // activeTimer: true,
      functionTimer: this.props?.functionTimer || storeTimer.timerMakeFun,
      invisibleBadge: true,
    };
  }

  componentDidMount() {
    console.log('Timer_componentDidMount');
    this.timerStart();
  }
  timerStart = () => {
    if (storeTimer.timerActive) {
      console.log('startTimer', ' counter4 = ', this.state.counter4)

      // ??? maybe delete str down > clearInterval
      clearInterval(this.state?.timerId);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
      this.timerId = setInterval(this.callbackTimeout, 1000);
      // console.log('typeof.timerId', typeof(this.timerId))
      // return this.setState({timer: timer});
    }
  }

  componentDidUpdate(prevProps: Readonly<inputTimer>, prevState: Readonly<any>, snapshot?: any) {
    console.log('Timer_componentDidUpdate');
  }


  componentWillUnmount() {
    console.log('Timer_componentWillUnmount');
    storeTimer.doStop();
    // storeTimer.timerBeginTime = 0;
    clearInterval(this.timerId);

    // console.log('stopTimer1', this.state.counter4)
    // console.log('stopTimer2', this.state.timer)
  }

  callbackTimeout = () => {
    // ??? возможно утечка памяти в this.state.timer
    // console.log('---', 'this.state.timer ', this.state.timer, 'this.state.counter4 ', this.state.counter4, 'this.state.isRepeat ', this.state.isRepeat)
    this.setState({counter4: (this.state.counter4 - 1)});
    if (storeTimer.timerActive && !storeTimer.timerRepeat && (this.state.counter4 === 0)) {// *** IS FINISH
      console.log(' 5 ', this.state.finishMessage);
      console.log(' storeTimer.timerRepeat ', storeTimer.timerRepeat);
      storeTimer.timerMakeFun(); // *** Finish действие при выполнении
      // this.setState({counter4: storeTimer.timerBeginTime});
      // clearInterval(this.timerId);
      this.onClickStart();
      // clearInterval(this.state.counter4);

      // storeTimer.timerShow();
    } else if (storeTimer.timerRepeat && (this.state.counter4 === 0)) {
      console.log(' 7 ', this.state.finishMessage);
      console.log(' storeTimer.timerRepeat ', storeTimer.timerRepeat);
      clearInterval(this.timerId);
      storeTimer.timerMakeFun(); // *** Temp действие при выполнении

    // } else if (!storeTimer.timerRepeat && (this.state.counter4 === 0)) {
    //   console.log(' 9 ', this.state.finishMessage);
    //   clearInterval(this.timerId);
    }
  }


  onClickStop = () => {
    storeTimer.clearPauseTime();
    storeTimer.doStop();
    clearInterval(this.timerId);
    // clearInterval(this.state.counter4);
    this.setState({counter4: 0});
    this.handleBadgeVisibility();
  }

  private onClickStart = () => {
    // console.clear();
    storeTimer.clearPauseTime();
    clearInterval(this.timerId);
    // clearInterval(this.state.counter4);
    this.setState({counter4: storeTimer.timerBeginTime});
    if (this.state.counter4 > 0) {
      storeTimer.doStart();
      // console.log('onClickStart', this.state.counter4);
      this.handleBadgeInVisibility();
       this.timerStart(); //return
    }
  }

  onClickPause = () => {
    storeTimer.doPause(this.state.counter4); // !!! <--------------Work here
    // this.setState({counter4: storeTimer.timerPauseTime});
    this.setState({counterTemp: storeTimer.timerPauseTime}); // ??? is use ?
    clearInterval(this.timerId);
    // clearInterval(this.state.counter4);
    this.handleBadgeVisibility();
  }

  onClickResume = () => {
    this.setState({counter4: storeTimer.timerPauseTime});
    storeTimer.doStart();

    this.handleBadgeInVisibility();
     this.timerStart(); //return
  }

  //=================================================================
  checkSwitch = () => { //event
    storeTimer.setTimerRepeat(); //this.setState({isRepeat: !this.state.isRepeat});
  }
  handleBadgeVisibility = () => {
    this.setState({invisibleBadge: false});
  }
  handleBadgeInVisibility = () => {
    this.setState({invisibleBadge: true});
  }
  onClickPlus = () => {
    storeTimer.increment();
    this.handleBadgeVisibility();
  }
  onClickMinus = () => {
    storeTimer.decrement();
    this.handleBadgeVisibility();
  }

  render() {
    // console.log('Timer_render')
    return (
      <div className="Timer4">
        <span>[ counterTemp:{this.state.counterTemp} ]</span><span>   </span>
        <span>[ counter4:{this.state.counter4} ]</span><span>   </span>
        <span>[ timerBeginTime:{storeTimer.timerBeginTime} ]</span><span>   </span>
        <span>[ timerPauseTime:{storeTimer.timerPauseTime} ]</span><span>   </span>
        <span>[ timerActive:{storeTimer.timerActive} ]</span><span>   </span>
        <br/>
        <hr/>
        <br/>
        <Box>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={storeTimer.timerBeginTime}
            color="error"
            invisible={this.state.invisibleBadge}
          >
            <Badge badgeContent={this.state.counter4} showZero color="primary">
              <AccessTime color="action"/>
            </Badge>
          </Badge>
          <span>   </span>
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