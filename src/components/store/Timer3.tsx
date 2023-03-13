import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ButtonGroup, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Badge from '@mui/material/Badge';
// import { deepPurple } from '@mui/material/colors';
// import { makeObservable, observable, computed, action } from "mobx"
import Store from "./Store";
import Box from "@mui/material/Box";


function Timer3() {
    const [count] = React.useState(1);
    // const [count, setCount] = React.useState(1);
    let counter3 = Store.timeUpdate;
    const [counterTemp = counter3, setCounter] = React.useState(counter3);
    let isRepeat = counterTemp,
        timer = 0 // пока пустая переменная

    const onClickStop = () => {
        setCounter(timer=0);
        clearInterval(timer);
        Store.timerTemp = 0;
        Store.reset();
    }
    const onClickStart = () => {
        setCounter(timer=Store.timeUpdate) ;
    }
    const onClickPause = () => {
        Store.timerTemp = counterTemp;
        Store.timerTemp = counterTemp;
        setCounter(timer=0);
        clearInterval(timer);
    }
    const onClickResume = () => {
        setCounter(timer=Store.timerTemp) ;
    }

    const checkSwitch = event => {
        (event.target.checked) ? isRepeat=counterTemp : isRepeat=0 ;
        console.log('isRepeat',isRepeat)
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
        if (counterTemp === 0) {
            console.log(' Timer3 ')
        };

        return () => clearInterval(timer);
    }, [counterTemp]);


    return (
        <div className="Timer3">
            {/*<h1>{counter3}</h1>*/}
            <Box
                >
                {/*<h4>{counter3} : [ {counterTemp} ]</h4>*/}
                <span>[ {Store.timeUpdate} ]</span>

                <Badge badgeContent={counterTemp} color="primary">
                    <AccessTime color="action" />
                </Badge>
                <span>[ {Store.timerTemp} ]</span>

                {/*<ButtonGroup variant="contained" sx={{ m: 1}}>*/}
                    {/*//*/}
                    <Button
                        aria-label="increase"
                        onClick={() => Store.increment()}
                        variant="contained"
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="reduce"
                        onClick={() => Store.decrement()}
                        variant="contained"
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                {/*</ButtonGroup>*/}
                <FormControlLabel control={<Switch defaultChecked />}
                                  onChange={checkSwitch }
                                  label="repeat"
                                  color={'inherit'}
                />

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={onClickStart}>Start</Button>
                    <Button onClick={onClickStop}>Stop </Button>
                    <Button onClick={onClickPause}>Pause</Button>
                    <Button onClick={onClickResume}>Resume</Button>
                </ButtonGroup>
            </Box>
        </div>
    );
}
export default Timer3;