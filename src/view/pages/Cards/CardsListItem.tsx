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
import {observer} from "mobx-react";
import {storeCoins} from "_store/StoreCoins";

@observer
export class CardsListItem extends React.Component<any, any> {
  classNames = 'priceColor ';

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    let arrX = storeCoins.ModalData; //  *** new
    let itemY = prevProps;      //  *** old
    console.log('---------------------');
    const idY = itemY.CoinInfo.Id; //*** <-----------WORK HERE
    // console.log('idY ', idY);
    arrX?.map(itemX => {
      // console.log('itemX ', itemX);
      const idX = itemX.CoinInfo.Id;
      // console.log('idX ', idX);
      if (idX == idY) {
        const priceY = prevProps.DISPLAY.USD.PRICE;
        const priceX = itemY.DISPLAY.USD.PRICE;
        console.log('priceX ', priceX);
        console.log('priceY ', priceY);
        if (priceX > priceY) {
          (this.classNames += ' red') // !!! провеерить и исправить позже = или +=
          // (this.classNames += ' red')
        } else if (priceX < priceY) {
          (this.classNames += ' green')
        }else {
              this.classNames += ' normalColor';
          }
      }
    });
  }

  render() {
    const {CoinInfo, DISPLAY, RAW} = this.props;
    return (
      <Grid item xs>
        <div className='EmployersList' style={{margin: 'auto'}}>
          <Card onClick={() => this.props.press(CoinInfo?.Id)}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {/*sx={{bgcolor: deepPurple[500]}}*/}
                  {DISPLAY?.USD.FROMSYMBOL}
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
              image={"https://www.cryptocompare.com/" + CoinInfo?.ImageUrl}
              alt={CoinInfo?.Id}

            />

            <CardContent>
              <Typography variant="body2" color="text.secondary" gutterBottom component="div">
                '{DISPLAY?.USD.FROMSYMBOL}'({CoinInfo?.Name}) = {RAW?.USD.PRICE}
                <AttachMoney fontSize="small" sx={{color: green[500]}}/>
              </Typography>
            </CardContent>

          </Card>
        </div>
      </Grid>
    )
  }
}

// sx={{ color: green[500] }}>add_circle</Icon>
// <Icon fontSize="small">add_circle</Icon>
//#66CC00
//https://get-color.ru/green/
// export default CardsListItem;