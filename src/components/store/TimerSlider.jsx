import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import AccessTime from '@mui/icons-material/AccessTime';
import {makeAutoObservable, makeObservable} from "mobx";
import counter from "./Counter";
import {observer} from "mobx-react-lite";

const Input = styled(MuiInput)`
  width: 42px;
`;
// !!! переделал на классахЮ не работает реактивность, observer
export class TimerSlider extends React.Component {
    // count: number = 1;
    value = 10;
    setValue = 10;
    constructor(props) {
        super(props); //props
        makeAutoObservable(this)
    }
    // observer();
     handleSliderChange = (event, newValue) => {
         console.log('>>', this.setValue, '---' , newValue)
          this.setValue = (newValue);
    }

    handleInputChange = (event) => {
        console.log('>>', this.setValue, '---' , event.target.value)
         this.setValue = (event.target.value === '' ? '' : Number(event.target.value));
    }

    handleBlur = () => {
        if (this.value < 0) {
            this.setValue=(0);
        } else if (this.value > 60) {
            this.setValue=(60);
        }
    }
    incr = () => {
        // return this.value = newValue;
        // console.log('this.setValue',this.setValue)
    }
    render() {
        return (
            // <h1>TimerSlider</h1>
            <Box sx={{width: 250}}>
                {/*<button onClick={() => this.incr()}>+++</button>*/}
                <Typography id="input-slider" gutterBottom>
                    update in sec
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <AccessTime/>
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof this.value === 'number' ? this.value : 0}
                            onChange={this.handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={this.value}
                            size="small"
                            onChange={this.handleInputChange}
                            onBlur={this.handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 60,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
// export default new TimerSlider()