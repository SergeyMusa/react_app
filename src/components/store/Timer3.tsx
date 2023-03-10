import React from 'react'
// import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ButtonGroup, Paper, withStyles} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { makeObservable, observable, computed, action } from "mobx"
import { observer } from "mobx-react-lite"
import Store from "./Store";
import Counter from "./Counter";

// export default function SwitchLabels() {
//     return (
//         <FormGroup>
//             <FormControlLabel control={<Switch defaultChecked />} label="Label" />
//         </FormGroup>
//     );
// }

// @observer
function Timer3() {
    const [count, setCount] = React.useState(1);
    // @observable
    let counter3 = Store.timeUpdate;
        // counterTemp = counter3; //Store.timerTemp
    const [counterTemp = counter3, setCounter] = React.useState(counter3);
    let isRepeat = counterTemp,
        timer = 0, // пока пустая переменная
        x = 10; // стартовое значение обратного отсчета

    const incCount = () => {
        counter3 = counter3 < 99 ? counter3 + 1 : 99 ;
        Store.timeUpdate = counter3;
        // console.log('counter3', counter3)
    }
    const decCount = () => {
        // setCount(Math.max(counter3 - 1, 0));
        counter3 = counter3 > 0 ? counter3 - 1 : 0 ;
        Store.timeUpdate = counter3;
        // console.log('counter3', counter3)
    }
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }
    const onClickStop = () => {
        setCounter(timer=0);
        clearInterval(timer);
        Store.timerTemp = 0;
        Store.reset();
        // console.log('onClickStop')
    }
    const onClickStart = () => {
        setCounter(timer=Store.timeUpdate) ;
        // console.log('onClickStart')
    }
    const onClickPause = () => {
        Store.timerTemp = counterTemp;
        Store.timerTemp = counterTemp;
        setCounter(timer=0);
        // console.log('Store.timerTemp', Store.timerTemp);
        // console.log('onClickPause')
        clearInterval(timer);
    }
    const onClickResume = () => {
        // setCounter(timer=0);
        // console.log('Store.timerTemp', Store.timerTemp);
        // console.log('Store.timeUpdate', Store.timeUpdate);
        setCounter(timer=Store.timerTemp) ;
        // console.log('onClickResume');
        // Store.timerTemp = 0;
    }

    const checkSwitch = event => {
        // setChecked(event.target.checked);
        // console.log((event.target.checked ? 'Timer3-true':'Timer3-false' ));
        (event.target.checked) ? isRepeat=counterTemp : isRepeat=0 ;
        console.log('isRepeat',isRepeat)
        // console.log('123',  event);
       // FormControlLabel = withStyles({.;//( label) {this.setState({value="repeat"})}
    };
    // First Attempts
    React.useEffect( () => {
        const one = () => {
            // console.log(' Timer3 ', isRepeat, counterTemp );
            // tik--;
        };
        const callbackTimeout =() => {
            setCounter(counterTemp - 1);
        }
        const timer = //!!! old setInterval
            counterTemp > 0 && setTimeout(callbackTimeout, 1000);
                setTimeout(one, 1000);
                if (counterTemp == 0) {
                    console.log(' Timer3 ')
                };

        return () => clearInterval(timer);
    }, [counterTemp]);

    // console.log('Store', Store.timerTestData);

    return (
        <div className="Timer3">
            <h1>{counter3}</h1>
            <button onClick={() => Store.increment()}>+++</button>
            <Paper elevation={3} >
                {/*<h4>{counter3} : [ {counterTemp} ]</h4>*/}
                {/*<Avatar sx={{ bgcolor: deepPurple[500], width: 36, height: 36 }}>15</Avatar>*/}
                <span>[ {Store.timeUpdate} ]</span>

                <Badge badgeContent={counterTemp} color="primary">
                    <AccessTime color="action" />
                </Badge>
                <span>[ {Store.timerTemp} ]</span>
                {/*<Badge badgeContent={counterTemp} color="error">*/}

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
                                  onChange={checkSwitch }
                                  label="repeat"
                />

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={onClickStart}>Start</Button>
                    <Button onClick={onClickStop}>Stop </Button>
                    <Button onClick={onClickPause}>Pause</Button>
                    <Button onClick={onClickResume}>Resume</Button>
                </ButtonGroup>
            </Paper>
        </div>
    );
}
export default Timer3;