import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {Timer} from "../Timer/Timer";
import Count from "_view/components/Count/Count";
import Grid from "@mui/material/Grid";

@observer
export class Header extends React.Component {
  public render() {
    return (
      <div className={'header'}>
        <AppBar position={'static'}>
          <Toolbar color="primary" >
            <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between'}}>
              <Grid item xs sx={{justifyContent: 'flex-start'}} wrap={"nowrap"} textAlign={"left"}>
                  {<Count/>}
              </Grid>
              <Grid item xs={3} alignItems="center"  >
                  <Typography fontSize={'18px'} variant={'h6'} component={'span'} >
                    MuSa_App
                  </Typography>
              </Grid>
              <Grid item xs alignItems="center"  sx={{mt:.5}} textAlign={"right"}>
                  {<Timer/>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
