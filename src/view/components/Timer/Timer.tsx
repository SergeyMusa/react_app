import React from 'react'
import {Badge, ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {AccessTime} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from "@mui/material/Box";
import {observer} from "mobx-react";
import {STORE_TIMER} from "_store/StoreTimer";
import {inputTimer} from "_common/dto/Type";

@observer
export class Timer extends React.Component<inputTimer, any> {
  componentDidMount() {
    // STORE_TIMER.start(30)
  }

  render() {
    return (
      <Box>
        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          badgeContent={STORE_TIMER.timeToEnd}
          color="error"
          invisible={STORE_TIMER.isEnded}
        >
          <Badge badgeContent={STORE_TIMER.timeToEnd} showZero color="primary">
            <AccessTime color="action"/>
          </Badge>
        </Badge>
        <span>   </span>
        <Button
          aria-label="increase"
          onClick={STORE_TIMER.increment}
          variant="contained"
        >
          <AddIcon fontSize="small"/>
        </Button>
        <Button
          aria-label="reduce"
          onClick={STORE_TIMER.decrement}
          variant="contained"
        >
          <RemoveIcon fontSize="small"/>
        </Button>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={this._start}>Start</Button>
          <Button onClick={STORE_TIMER.stop}>Stop </Button>
        </ButtonGroup>
      </Box>
    );
  }

  private _start(){
    STORE_TIMER.start()
  }
}