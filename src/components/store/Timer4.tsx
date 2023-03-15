import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ButtonGroup, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import Badge from '@mui/material/Badge';
// import { makeObservable, observable, computed, action } from "mobx"
import { store } from "./Store";
// import {number} from "prop-types";
// import {action, makeAutoObservable, observable} from "mobx";

export class Timer4 extends React.Component<any, any> {
    counter4: any;
    // timer: any;
    // counterTemp: any;
    constructor(props: any) {
        super(props);
        // makeAutoObservable(this)
        this.state = {
            finishMessage: "Timer3 - USED",
            counter4: store.timeUpdate,
            counterTemp: this.counter4,
            // timeLeft: this.counterTemp,
            // time: {},
            timeLeft: 5,  // !!! оставшееся время - временно - хранится в сторе
            timer: 0, // Отсылка на таймер
            isRepeat: false,
            // counter4: observable,

            // setCounter: 0,
            // counterTemp: 0, //[this.counter4, 0], // this.setCounter
            // onClickStart: action,
        };
        this.startTimer = this.startTimer.bind(this);
        // this.countDown = this.countDown.bind(this);
    }

    // secondsToTime(secs: any){
    //     let hours = Math.floor(secs / (60 * 60));
    //
    //     let divisor_for_minutes = secs % (60 * 60);
    //     let minutes = Math.floor(divisor_for_minutes / 60);
    //
    //     let divisor_for_seconds = divisor_for_minutes % 60;
    //     let seconds = Math.ceil(divisor_for_seconds);
    //
    //     let obj = {
    //         "h": hours,
    //         "m": minutes,
    //         "s": seconds
    //     };
    //     return obj;
    // }

    // componentDidMount() {
    //     let timeLeftVar = this.secondsToTime({seconds: this.state.seconds});
    //     this.setState({ time: timeLeftVar });
    // }
    callbackTimeout = () => {
        console.log(' counter4.1 ', this.state.counter4);
        console.log(' timeLeft ', this.state.timeLeft)
        // this.counterTemp = this.state.counterTemp - 1;  // Отнимает 1 секунду от оставшегося времени
        this.setState({counter4: (this.state.counter4 - 1)});
        this.setState({timeLeft: (this.state.timeLeft - 1)});
        // let timeLeft = this.state.timeLeft - 1;
        // console.log(' counter4.2 ', this.state.counter4);
        // return this.setState({counterTemp: this.counterTemp});
        console.log(' timer = ', this.state.timer);
    }

    startTimer() {
        // ??? maybe delete str down > clearInterval
        console.log(' timeLeft ', this.state.timeLeft)
        console.log('startTimer', ' counter4 = ', this.state.counter4)

        clearInterval(this.state.timer);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
        // this.counter3 = this.store.timeUpdate;
        let timeLeft = this.state.timeLeft;
        let timer = timeLeft > 0 && setInterval(this.callbackTimeout, 1000, this.state.finishMessage);

        // this.state.counterTemp =  this.state.counterTemp > 0 && setTimeout(this.callbackTimeout, 1000, this.state.finishMessage);
        console.log(' timer = ', timer);

        if (this.state.counter4 === 0 || -1) {
            console.log(' Timer4 - ok ')
            console.log(' 5 ', this.state.finishMessage)
        }
        ;

        // return () => clearInterval(timer);
        return this.setState({timeLeft: timeLeft, timer: timer});
    }

    // const [count, setCount] = React.useState(1);

    //  [counterTemp = counter3, setCounter] = React.useState(counter3);
    // isRepeat = counterTemp,

    onClickStop() {
        // this.setCounter(this.timer=0);

        this.setState({timer: 0});

        clearInterval(this.state.timer);
        store.timerTemp = 0;
        console.log('onClickStop')
    }

    onClickStart = () => {
        // setCounter(timer=store.timeUpdate) ;
        console.log('timer', this.state.timer);
        this.setState({timer: store.timeUpdate});
        console.log('timer', this.state.timer);

        console.log('onClickStart', this.state.counter4);

        return this.startTimer();
    }
    onClickPause = () => {
        //     store.timerTemp = counterTemp;
        //     store.timerTemp = counterTemp;
        //     setCounter(timer=0);
        //     clearInterval(timer);
        console.log('onClickPause')
    }
    onClickResume = () => {
        //     setCounter(timer=store.timerTemp) ;
        console.log('onClickResume')
    }
    //
    checkSwitch = event => {
        // (event.target.checked) ? isRepeat=counterTemp : isRepeat=0 ;
        console.log('isRepeat', this.state.isRepeat)
    }    //   store.reset();
    //
    //


    render() {
        // const {timerTemp} = this.props;
        return (
            <div className="Timer4">
                <div>
                    {/*<button onClick={this.startTimer}>Start</button>*/}
                    {/*<Button time = '10' startTimer = {this.startTimer}/>*/}
                    {/*m: {this.state.time.m} s: {this.state.time.s}*/}
                </div>
                {/*<h1> {this.state.timeLeft} </h1>*/}
                <Paper elevation={3}>
                    <h4>{this.state.counter4} : [ {this.state.timeLeft} ]</h4>
                    {/*<h4>{this.counter4} : [ {counterTemp} ]</h4>*/}
                    <span>[ {store.timeUpdate} ]</span>

                    {/*<Badge badgeContent={counterTemp} color="primary">*/}
                    {/*<Badge badgeContent={time_up} color="primary">*/}
                    <AccessTime color="action"/>
                    {/*</Badge>*/}
                    <span>[ {store.timerTemp} ]</span>

                    {/*<ButtonGroup >*/}
                    {/*//variant="contained"*/}
                    <Button
                        aria-label="increase"
                        onClick={() => store.increment()}
                    >
                        <AddIcon fontSize="small"/>
                    </Button>
                    <Button
                        aria-label="reduce"
                        onClick={() => store.decrement()}
                    >
                        <RemoveIcon fontSize="small"/>
                    </Button>
                    {/*</ButtonGroup>*/}
                    <FormControlLabel control={<Switch defaultChecked/>}
                                      onChange={this.checkSwitch}
                                      label="repeat"
                    />

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={this.onClickStart}>Start</Button>
                        <Button onClick={this.onClickStop}>Stop </Button>
                        <Button onClick={this.onClickPause}>Pause</Button>
                        <Button onClick={this.onClickResume}>Resume</Button>
                    </ButtonGroup>
                </Paper>
            </div>
        )
    }
}

export default Timer4

