import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {Timer} from "../Timer/Timer";
import Count from "_view/components/Count/Count";

@observer
export class Header extends React.Component {

  public render() {
    return (
      <div className={'header'}>
        <AppBar position={'static'}>
          <Toolbar color="primary">
            {<Count/>}
            <Typography
              fontSize={'18px'}
              variant={'h6'}
              component={'span'}
              sx={{flexGrow: 1}}
            >
              MuSa_App
            </Typography>
            {<Timer/>}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
