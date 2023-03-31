import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Badge, ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from "@mui/material/Box";
import {observer} from "mobx-react";
import {storeTimer} from "../store/StoreTimer";
import {inputTimer} from "../type/Type";

@observer
export class Timer4 extends React.Component<inputTimer, any> {
  timerId: any;
  constructor(props?: inputTimer) {
    super(props);
    this.state = {
      finishMessage: this.props?.messageTimer || storeTimer.timerMessage,
      counter4: this.props?.inputTime || storeTimer.timerBeginTime,
      // counterTemp: storeTimer.timerPauseTime,
      functionTimer: this.props?.functionTimer || storeTimer.timerMakeFun,
      invisibleBadge: true,
    };
  }

  componentDidMount() {
    // console.log('Timer_componentDidMount');
    this.timerStart();
    this.onClickStart();
  }

  timerStart = () => {
    if (storeTimer.timerActive) {
      // console.log('timerStart', ' timerId = ', this?.timerId)
      this.timerId = setInterval(this.callbackTimeout, 1000);

    }
  }

  componentDidUpdate(prevProps: Readonly<inputTimer>, prevState: Readonly<any>, snapshot?: any) {
    // console.log('Timer_componentDidUpdate');
  }

  componentWillUnmount() {
    // console.log('Timer_componentWillUnmount');
    storeTimer.doStop();
    clearInterval(this.timerId);
  }

  callbackTimeout = () => {
    // ??? возможно утечка памяти в this.state.timer
    // console.log('---', 'this.timerId ', this.timerId, 'this.state.counter4 ', this.state.counter4, 'Repeat ', storeTimer.timerRepeat )

    this.setState({counter4: (this.state.counter4 - 1)});
    if (storeTimer.timerActive && storeTimer.timerRepeat && (this.state.counter4 === 0)) {// *** IS FINISH
      // console.log(' 5 ', this.state.finishMessage);
      this.onClickStart();
      storeTimer.timerMakeFun(); // *** Finish действие и стоп
      // storeTimer.timerShow();

    } else if (!storeTimer.timerRepeat && (this.state.counter4 === 0)) {
      // console.log(' 7 ', this.state.finishMessage);
      clearInterval(this.timerId);
      this.onClickStop();
      storeTimer.timerMakeFun(); // *** Temp действие и продолжить
      // storeTimer.timerShow();
    }
  }

  onClickStop = () => {
    storeTimer.clearPauseTime();
    storeTimer.doStop();
    clearInterval(this.timerId);
    this.setState({counter4: 0});
    this.handleBadgeVisibility();
  }

  private onClickStart = () => {  // !!! <--------------Work here
    // console.clear();
    // console.log('onClickStart', this.timerId);
    storeTimer.clearPauseTime();
      // clearInterval(this.timerId);
    this.setState({counter4: storeTimer.timerBeginTime});
    if (this.state.counter4 > 0) {
      storeTimer.doStart();
      this.handleBadgeInVisibility();
      this.timerStart(); //return
    }
  }

  onClickPause = () => {
    storeTimer.doPause(this.state.counter4);
    // this.setState({counterTemp: storeTimer.timerPauseTime}); // ??? is use ?
    clearInterval(this.timerId);
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
    storeTimer.setTimerRepeat();
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
        {/*<span>[ counterTemp:{this.state.counterTemp} ]</span><span>   </span>*/}
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