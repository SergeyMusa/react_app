import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Badge, ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { store } from "./StoreTimer";
import Box from "@mui/material/Box";
import {ResponseData} from "./type";
import {number} from "prop-types";
// import { makeObservable, observable, computed, action } from "mobx"

//??? как автозапуск сделать
export interface inputTimer {
    inputTime?: number;
    messageTimer?: string;
    activeTimer?: boolean;
    functionTimer?():void ;
}

export class Timer4 extends React.Component<inputTimer, any> {
    // state: any

    constructor(props?: inputTimer) {
        super(props);
        this.state = {
                finishMessage: this.props?.messageTimer || store.timerMessage,
                counter4: this.props?.inputTime || store.timerBeginTime, // !!! оставшееся время
                counterTemp: store.timerBeginTime , // ??? CHECK !!! поменять местами с counter4
                timer: 0, // Отсылка на таймер
                isRepeat: false,
                checkerLabel: '',
                activeTimer: true,
                functionTimer: this.props?.functionTimer || store.timerMakeFun ,
            };
        // makeAutoObservable(this) // !!! dont work super
        // this.startTimer(); //!!! <<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }

    componentDidMount() { // ??? ERROR dont work autostart
        // Timer4.startTimer();
        if (store.timerActive) {
            this.startTimer();
        }
    }

    callbackTimeout = () => {
        // this.counterTemp = this.state.counterTemp - 1;  // Отнимает 1 секунду от оставшегося времени
    console.log('---','this.state.timer ', this.state.timer, 'this.state.counter4 ', this.state.counter4,'this.state.isRepeat ', this.state.isRepeat)
        this.setState({counter4: (this.state.counter4 - 1)}); // *** IS FINISH
        if (store.timerActive && this.state.isRepeat && (this.state.counter4 === 0) ) {
            console.log(' 5 ', this.state.finishMessage);
            // this.state.functionTimer ;
            clearInterval( this.state.timer);
     store.timerShow();
        } else if  ( !this.state.isRepeat && (this.state.counter4 === 0) )
        {
            this.onClickStart() ;
        }
    }

    startTimer = () => {
        // ??? maybe delete str down > clearInterval
        // console.log('startTimer', ' counter4 = ', this.state.counter4)
        clearInterval(this.state?.timer);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
        let timer = setInterval(this.callbackTimeout, 1000);
        // return () => clearInterval(timer);
        return this.setState({ timer: timer });
    }

    onClickStop = () => {
        store.timerPauseTime = 0;
        store.timerActive = false;
        this.setState({counter4: 0});
        clearInterval(this.state.timer);
        // console.log('onClickStop')
    }

    onClickStart = () => {
        console.clear();
        clearInterval(this.state.timer);
        // store.activeTimer = true;
        this.setState({counter4: store.timerBeginTime});
        // console.log('onClickStart', this.state.counter4);
        return this.startTimer();
    }
    onClickPause = () => {
        store.timerPauseTime = this.state.counter4;
        //     setCounter(timer=0);
        clearInterval(this.state.timer);
        // console.log('onClickPause')
    }
    onClickResume = () => {
        this.setState({counter4: store.timerPauseTime});
        // console.log('onClickResume')
        return this.startTimer();
    }
    //
    checkSwitch = event => {
        this.setState({ isRepeat: !this.state.isRepeat} );
        // (this.state.isRepeat) ? this.setState({ checkerLabel: "repeat" }) : this.setState({ checkerLabel: "no_repeat" });
    }

    render() {
        return (
            <div className="Timer4">
                <Box>
                    {/*<span>[ {this.state.counterTemp} ]</span>*/}
                    <Badge badgeContent={this.state.counter4} color="primary">
                        {/*<Badge badgeContent={time_up} color="primary">*/}
                        <AccessTime color="action"/>
                    </Badge>
                    <span>   </span>
                    {/*<span>[ {this.state.counter4} ]</span>*/}

                    <Button
                        aria-label="increase"
                        onClick={() => store.increment()}
                        variant="contained"
                    >
                        <AddIcon fontSize="small"/>
                    </Button>
                    <Button
                        aria-label="reduce"
                        onClick={() => store.decrement()}
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