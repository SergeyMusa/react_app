import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {Timer} from "../Timer/Timer";
import CountLoadCoins from "_view/components/CountLoadCoins/CountLoadCoins";
import Grid from "@mui/material/Grid";
import { Downloading } from "@mui/icons-material";
import Icon from '@mui/material/Icon';
import {STORE_COINS} from "_store/StoreCoins";
import Button from "@mui/material/Button";


@observer
export class Header extends React.Component {
  private clickDownload () {
    STORE_COINS.loadData().then();
  }
  public render() {
    return (
      <div className={'header'}>
        <AppBar position={'static'}>
          <Toolbar color="primary" >
            <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'space-between'}}>
              <Grid item xs sx={{justifyContent: 'flex-start'}} textAlign={"left"}>
                  {<CountLoadCoins/>}
                <Button variant="contained"
                        color="primary"
                        size={"medium"}
                        sx={{mt:1 , alignItems: 'center'}}
                        startIcon={<Downloading />}
                        onClick={this.clickDownload} >
                  load
                </Button>
              </Grid>
              <Grid item xs={3} alignItems="center"  >
                  <Typography fontSize={'18px'} variant={'h6'} component={'span'} >
                    MuSa_App
                  </Typography>
              </Grid>
              <Grid item xs alignItems="center"  sx={{mt:1}} textAlign={"right"}>
                  {<Timer/>}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
