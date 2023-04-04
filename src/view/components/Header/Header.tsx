import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {Timer4} from "_common/utils/Timer4";
import {storeTimer} from "_store/StoreTimer";

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
