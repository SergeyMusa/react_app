import React from "react";
import {AttachMoney} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {storeTimer} from "../../store/StoreTimer";
import {Timer4} from "../../utils/Timer4";
import TableCell from "@mui/material/TableCell";

export class CardsListItemFull extends React.Component<any, any> {
  classNames = 'priceColor normalColor';
  preUrl = "https://www.cryptocompare.com/";

  componentDidMount() {
    storeTimer.doStop();
  }

  componentWillUnmount() {
    storeTimer.doStart();
    new Timer4().onClickResume(); // !!! - - - Dont Work
    // new Timer4().timerStart();
    console.log('close_modal');
  }

  render() {
    const {CoinInfo, DISPLAY, RAW} = this.props

    return (
      <Grid item xs>
        <div className='EmployersList' style={{margin: 'auto'}}>
          <Card sx={{maxWidth: 345}}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {DISPLAY?.USD?.FROMSYMBOL}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                </IconButton>
              }
              title={"id: " + CoinInfo?.Id}
              className={this.classNames} // ??? будеам менять цвет при повышении или понижении .red .green
            />

            <CardMedia
              component="img"
              sx={{height: 170, width: 170, margin: 'auto'}}
              height='180'
              image={this.preUrl + CoinInfo?.ImageUrl}
              alt={CoinInfo?.Id}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom component="div">
                '{DISPLAY?.USD?.FROMSYMBOL}'({CoinInfo?.Name}) = {RAW?.USD?.PRICE}
                <AttachMoney fontSize="small" sx={{color: green[500]}}/>
                <hr/>
                NetHashesPerSecond - {CoinInfo?.NetHashesPerSecond}
                MKTCAP - {DISPLAY?.USD.MKTCAP}
                TOTALVOLUME24HTO - {DISPLAY?.USD.TOTALVOLUME24HTO}
              </Typography>
            </CardContent>

          </Card>
        </div>
      </Grid>

    )
  }
}
