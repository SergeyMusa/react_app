import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {storeTimer} from "../store/StoreTimer";
import {observer} from "mobx-react";
import {Timer4} from "../utils/Timer4";

@observer
export class Header extends React.Component {

  public render() {
    return (
      <div className={'header'}>
        <AppBar position={'static'}>
          <Toolbar>
            <Typography
              fontSize={'18px'}
              variant={'h6'}
              component={'span'}
              sx={{flexGrow: 1}}
            >
              MuSa_App
            </Typography>
            {storeTimer.timerVisible ? <Timer4/> : null}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
