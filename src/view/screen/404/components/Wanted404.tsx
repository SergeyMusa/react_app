import {observer} from "mobx-react";
import React from "react";
import Box from "@mui/material/Box";
// @ts-ignore
// import img2 from '../assets/i.webp';

import img2 from '../assets/img1.jpg';
// import companyLogo from "_view/screen/404/assets/img1.jpg";

@observer
export class Wanted404 extends React.Component {
  public render() {

    return (
      <>
        <h3>Wanted404</h3>
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
          <img src={img2} alt="img2"/>

        </Box>

      </>
    )
  }
}