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


// export default function SwitchLabels() {
//     return (
//         <FormGroup>
//             <FormControlLabel control={<Switch defaultChecked />} label="Label" />
//         </FormGroup>
//     );
// }

function Timer3() {
    const [count, setCount] = React.useState(1);
    let counter3 = 15;
        // counterTemp = counter3;
    const [counterTemp = counter3, setCounter] = React.useState(counter3);
    let isRepeat = counterTemp,
        timer = 0, // пока пустая переменная
        x = 10; // стартовое значение обратного отсчета

    const incCount = () => {
        counter3 = counter3 < 99 ? counter3 + 1 : 99 ;
        console.log('counter3', counter3)
    }
    const decCount = () => {
        // setCount(Math.max(counter3 - 1, 0));
        counter3 = counter3 > 0 ? counter3 - 1 : 0 ;
        console.log('counter3', counter3)
    }
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }
    const onClickStop = () => {
        setCounter(timer=0);
        // console.log('onClickStop')
        clearInterval(timer);
    }
    const onClickStart = () => {
        setCounter(timer=counter3) ;
        // console.log('onClickStart')
    }
    const onClickPause = () => {
        // setCounter(timer=0);
        console.log('onClickPause')
    }
    const onClickResume = () => {
        // setCounter(timer=0);
        console.log('onClickResume')
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
            console.log(' Timer3 ', isRepeat, counterTemp );
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

    return (
        <div className="Timer3">

            <Paper elevation={3} >
                {/*<h4>{counter3} : [ {counterTemp} ]</h4>*/}
                {/*<Avatar sx={{ bgcolor: deepPurple[500], width: 36, height: 36 }}>15</Avatar>*/}
                <span>{counter3}</span>
                <Badge badgeContent={counterTemp} color="primary">
                    <AccessTime color="action" />
                </Badge>
                {/*<Badge badgeContent={counterTemp} color="error">*/}

                <ButtonGroup >
                    {/*//variant="contained"*/}
                    <Button
                        aria-label="reduce"
                        onClick={decCount}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={incCount}
                    >
                        <AddIcon fontSize="small" />
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