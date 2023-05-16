import React, {useTransition} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {observer} from "mobx-react";
import {Timer} from "../Timer/Timer";
import CountLoadCoins from "_view/components/CountLoadCoins/CountLoadCoins";
import Grid from "@mui/material/Grid";
import { Downloading } from "@mui/icons-material";
// import Icon from '@mui/material/Icon';
import {STORE_COINS} from "_store/StoreCoins";
import Button from "@mui/material/Button";
//---
import * as locales from '@mui/material/locale';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

type SupportedLocales = keyof typeof locales;


@observer
export class Header extends React.Component <any, any> {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'enUS'
    };
  }

  handleClick = (lng) => { // !!!remake
    this.setState({ locale: lng})

  }

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
              <Grid item xs alignItems="right"  sx={{mt:1}} textAlign={"center"}>
                  {<Timer/>}
              </Grid>




            </Grid>
            {/*<Grid item xs alignItems="right"  sx={{mt:1, justifyContent: 'flex-end'}} textAlign={"right"}>*/}
            <Box >
              {/*<ThemeProvider theme={themeWithLocale}>*/}
              <Autocomplete
                options={Object.keys(locales)}
                getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
                style={{width:110}}
                value={this.state.locale}
                disableClearable
                onChange={(event: any, newValue: string | null) => {
                  this.handleClick(newValue as SupportedLocales);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Locale" fullWidth/>
                )}
              />
              {/*</ThemeProvider>*/}
            </Box>
            {/*</Grid>*/}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
