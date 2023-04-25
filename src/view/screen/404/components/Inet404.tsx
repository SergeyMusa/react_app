import {observer} from "mobx-react";
import React from "react";
import Box from "@mui/material/Box";
// import companyLogo from '../assets/img1.jpg';
// @ts-ignore
import companyLogo from "_view/screen/404/assets/img1.jpg";

@observer
export class Inet404 extends React.Component {
  public render() {
    return (
      <>
        <h3>Inet404</h3>
        <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
          <img src={companyLogo} alt="BigCo Inc. logo"/>

        </Box>
      </>
    )
  }
}