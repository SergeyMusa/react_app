import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ButtonGroup, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
// import { makeObservable, observable, computed, action } from "mobx"
import Store from "./Store";
import {number} from "prop-types";
import {observable} from "mobx";

export class Timer4 extends React.Component<any, any> {
    counter3: number;
    timer: any;

    constructor(props: any) {
        super(props);
        this.state = {
            // time: {},
            timeLeft: 15,  // !!! оставшееся время - временно - хранится в сторе
            timer: 0, // Отсылка на таймер
            isRepeat: false,
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

    startTimer(timeLeft) {   // Вызывается при нажатии на button
        clearInterval(this.state.timer);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
        // this.counter3 = Store.timeUpdate;
         this.timer = setTimeout(() => { // old setInterval // old timer =

            let timeLeft = this.state.timeLeft - 1;  // Отнимает 1 секунду от оставшегося времени
            if (timeLeft === 0) {    // Если оставшееся время равно 0,
                // if (this.timer == 0 && this.state.seconds > 0) {
                clearInterval(this.timer); //old clearInterval(timer) // очищаем таймер, чтоб таймер не уходил в минус
            }
            this.setState({
                timeLeft: timeLeft   // timeLeft из строки 25 равен timeLeft из строки 58
            });
        }, 1000);
        return this.setState({timeLeft: timeLeft});
        // return this.setState({timeLeft: timeLeft, timer: timer});
    }


    // const [count, setCount] = React.useState(1);

    //  [counterTemp = counter3, setCounter] = React.useState(counter3);
    // isRepeat = counterTemp,
    // пока пустая переменная


    // onClickStop () {
    //     // this.setCounter(this.timer=0);
    //     clearInterval(timer);
    //     Store.timerTemp = 0;
    // }
    // onClickStart = () => {
    //     setCounter(timer=Store.timeUpdate) ;
    // }
    // onClickPause = () => {
    //     Store.timerTemp = counterTemp;
    //     Store.timerTemp = counterTemp;
    //     setCounter(timer=0);
    //     clearInterval(timer);
    // }
    // onClickResume = () => {
    //     setCounter(timer=Store.timerTemp) ;
    // }
    //
    // checkSwitch = event => {
    //     (event.target.checked) ? isRepeat=counterTemp : isRepeat=0 ;
    //     console.log('isRepeat',isRepeat)
    // }       Store.reset();
    //
    //


    render() {

        return (
            <div className="Timer4">
                <div>
                    <button onClick={this.startTimer}>Start</button>
                    {/*<Button time = '10' startTimer = {this.startTimer}/>*/}
                    {/*m: {this.state.time.m} s: {this.state.time.s}*/}
                </div>
                <h1> {this.state.timeLeft} </h1>
                <Paper elevation={3} >
                    {/*<h4>{counter3} : [ {counterTemp} ]</h4>*/}
                    <span>[ {Store.timeUpdate} ]</span>

                    {/*<Badge badgeContent={counterTemp} color="primary">*/}
                    {/*<Badge badgeContent={time_up} color="primary">*/}
                    {/*    <AccessTime color="action" />*/}
                    {/*</Badge>*/}
                    <span>[ {Store.timerTemp} ]</span>

                    <ButtonGroup >
                        {/*//variant="contained"*/}
                        <Button
                            aria-label="increase"
                            onClick={() => Store.increment()}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                        <Button
                            aria-label="reduce"
                            onClick={() => Store.decrement()}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                    <FormControlLabel control={<Switch defaultChecked />}
                        // onChange={checkSwitch }
                                      label="repeat"
                    />

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {/*<Button onClick={onClickStart}>Start</Button>*/}
                        {/*<Button onClick={onClickStop}>Stop </Button>*/}
                        {/*<Button onClick={onClickPause}>Pause</Button>*/}
                        {/*<Button onClick={onClickResume}>Resume</Button>*/}
                    </ButtonGroup>
                </Paper>
            </div>
        )
    }
}
export default Timer4

