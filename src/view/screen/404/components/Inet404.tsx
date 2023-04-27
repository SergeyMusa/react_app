import {observer} from "mobx-react";
import React from "react";
import Box from "@mui/material/Box";
// import companyLogo from '../assets/img1.jpg';
// @ts-ignore
import background from "_view/screen/404/assets/wanted.jpeg";


@observer
export class Inet404 extends React.Component {
  public render() {
    return (
      <>
        <h3>Inet404</h3>
        <Box component="span" sx={{ p: 2, border: '1px dashed grey', width: '50%',
          height: '50%',}}>
          {/*backgroundImage:{*/}
          {/*  source={{uri:companyLogo}}*/}
          {/*  flex: 1,*/}
          {/*  width: 50,*/}
          {/*  height: 50,*/}
          {/*  resizeMode: 'contain'*/}
          {/*}*/}

          <img
            height={'30%'}
            width={'30%'}
            // styles={{ minWidth: 300, minHeight: 300 }}

            src={background} alt="BigCo Inc. logo"/>

        </Box>
      </>
    )
  }
}