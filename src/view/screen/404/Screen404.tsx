import {observer} from "mobx-react";
import React from "react";
import {Container} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {STORE_TIMER} from "_store/StoreTimer";
import {SystemStyleObject} from "@mui/system";
// @ts-ignore
import background from "_view/screen/404/assets/wanted.jpg";
// @ts-ignore
import coin from "_view/screen/404/assets/btc.png";
import Box from "@mui/material/Box";
import './assets/css/Screen404.css';
import './assets/fonts/Old-Town-Normal.ttf'

@observer
export class Screen404 extends React.Component<any, any> {

  private data = require('/src/assets/json/plug.json');
  coinPrice: string = '';
  coinName: string = '';
  coinImage: string = '';

  makeRenderData() {
    let length = Object.keys(this.data.Data).length;
    let random = Math.floor(Math.random() * length)
    let coin = this.data.Data[random];
    // console.log('random', random);
    // console.log('coin', coin);

    let coinName = coin.CoinInfo.Name;
    let coinPrice = coin.RAW.USD.PRICE.toString();
    if (coinPrice.length > 6) {
      coinPrice = coinPrice.substr(0, 7) + '...'
    }
    // console.log('coinPrice.length',coinPrice.length)


    let ImageUrl = coin.CoinInfo.ImageUrl
    let coinImage = ImageUrl.substring(ImageUrl.length, ImageUrl.lastIndexOf("/")+1);
    // img: require('../assets/imgProj_1.png').default,

    // console.log('x-', ImageUrl.lastIndexOf("/") );
    // console.log('coinImage', coinImage)

    this.coinPrice = coinPrice;
    this.coinName = coinName;
    this.coinImage = require(`./assets/${coinImage}`);

    console.log(coinName, coinPrice, coinImage)
  }


  public render() {
    this.makeRenderData();
    console.log('this.coin', this.coinPrice);
    console.log('this.coinImage', this.coinImage);

    STORE_TIMER.stop();
    return (
      <>
        <h3>404</h3>
        <Container>
          <Box>
            <div className={'wrapper'}>
            <div className={'imgWanted border'}>
              <img
                height={'100%'}
                width={'100%'}
                src={background} alt="img wanted"
              />
              <div className={'imgCoin border'}>2
                <img
                  height={'100%'}
                  width={'100%'}
                  src={coin} alt="img coin"
                />
                <img
                  height={'100%'}
                  width={'100%'}
                  src={this.coinImage} alt="img coin"
                />
              </div>
              <div className={'textName border'}><b> {this.coinName} </b></div>
              <div className={'textCost border'}><b>{this.coinPrice}</b></div>
            </div>
            </div>
          </Box>

          {/*  // styles={{ minWidth: 300, minHeight: 300 }}*/}

          {/*<Box component="span" sx={{*/}
          {/*  p: 2, border: '1px dashed grey', width: '50%',*/}
          {/*  height: '50%', zIndex: '20'*/}
          {/*}}>*/}
          {/*</Box>*/}

        </Container>
        <br/>
        <Button component={Link} to="/Home" variant="contained" sx={{marginTop: 2}}>go home</Button>
      </>
    );
  }
}

const classes: { [key: string]: SystemStyleObject } = {
// const classes = StyleSheet.create( {
  imgWanted: {
    color: 'green',
    width: '300px',
    border: '0.3rem double red',
  },
  border: {
    border: '0.3rem double red'
  }
}
// )