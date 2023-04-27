import {observer} from "mobx-react";
import React from "react";
import { Container} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {STORE_TIMER} from "_store/StoreTimer";
import { SystemStyleObject } from "@mui/system";
// @ts-ignore
import background from "_view/screen/404/assets/wanted.jpeg";
// @ts-ignore
import coin from "_view/screen/404/assets/btc.png";
import Box from "@mui/material/Box";
import './assets/Screen404.css';
@observer
export class Screen404 extends React.Component<any, any> {
  clickYes(path) {
    // this.props.history.push(path)
    console.log('clickYes')
  }

  // clickNo(path) {
  //   return <Inet404/>
  // }

  public render() {
    STORE_TIMER.stop();
    return (
      <>
        <h3>404</h3>
        <Container sx={{mt: '1rem' , zIndex: '30'}} maxWidth={false}>
          <div className={'imgWanted border'}>1
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
            </div>
            <div className={'text border'}><b>wewefwfvwew3</b></div>
          </div>

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
const classes: {[key:string]: SystemStyleObject} = {
// const classes = StyleSheet.create( {
  imgWanted: {
    color: 'green',
    width: '300px',
    border: '0.3rem double red',
  },
  border:{
    border: '0.3rem double red'
  }
}
// )