import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Badge, ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { store } from "./Store";
import Box from "@mui/material/Box";
// import { makeObservable, observable, computed, action } from "mobx"

//??? как автозапуск сделать

export class Timer4 extends React.Component<any, any> {
    counter4: any;
    timer: any;
    timerFunction: any; // ??? change on Fun
    constructor(props: any) {
        super(props);
        // makeAutoObservable(this) // !!! dont work super
        this.state = {
            finishMessage: "Timer3 - USED",
            counter4: store.timeUpdate, // !!! оставшееся время
            counterTemp: store.timeUpdate , // !!! поменять местами с counter4
            // timeLeft: 15,  // !!! оставшееся время - временно - хранится в сторе
            timer: 0, // Отсылка на таймер
            isRepeat: false,
            checkerLabel: '',
        };
        this.startTimer = this.startTimer.bind(this);
    }

    callbackTimeout = () => {
        // this.counterTemp = this.state.counterTemp - 1;  // Отнимает 1 секунду от оставшегося времени
        this.setState({counter4: (this.state.counter4 - 1)}); // *** IS FINISH
        if ( this.state.isRepeat && (this.state.counter4) === 0 ) {
            console.log(' 5 ', this.state.finishMessage);
            clearInterval( this.state.timer);
             store.timerFunction();
        } else if  ( !this.state.isRepeat && (this.state.counter4) === 0 )
        {
            this.onClickStart() ;
        }
        // console.log('---',this.state.timer)
    }

    startTimer = () => {
        // ??? maybe delete str down > clearInterval
        // console.log('startTimer', ' counter4 = ', this.state.counter4)
        clearInterval(this.state.timer);  // Избавляемся от запусков нескольких таймеров одновременно при нажатии на разные кнопки
        let timer = setInterval(this.callbackTimeout, 1000);
        // return () => clearInterval(timer);
        return this.setState({ timer: timer });
    }

    //  [counterTemp = counter3, setCounter] = React.useState(counter3);
    // isRepeat = counterTemp,

    onClickStop = () => {
        this.setState({counter4: 0});
        clearInterval(this.state.timer);
        // this.setState({timer: 0});
        store.timerTemp = 0;
        // console.log('onClickStop')
    }

    onClickStart = () => {
        console.clear();
        clearInterval(this.state?.timer);
        this.setState({counter4: store.timeUpdate});
        // console.log('onClickStart', this.state.counter4);
        return this.startTimer();
    }
    onClickPause = () => {
        store.timerTemp = this.state.counter4;
        //     setCounter(timer=0);
        clearInterval(this.state.timer);
        // console.log('onClickPause')
    }
    onClickResume = () => {
        this.setState({counter4: store.timerTemp});
        // console.log('onClickResume')
        return this.startTimer();
    }
    //
    checkSwitch = event => {
        this.setState({ isRepeat: !this.state.isRepeat} );
        // (this.state.isRepeat) ? this.setState({ checkerLabel: "repeat" }) : this.setState({ checkerLabel: "no_repeat" });
    }

    render() {
        // [counter4, counterTemp] = this.state;
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

                    {/*<ButtonGroup >*/}
                    {/*//variant="contained"*/}
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
                    {/*</ButtonGroup>*/}
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

export default Timer4

