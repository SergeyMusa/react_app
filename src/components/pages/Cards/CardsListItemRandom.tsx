import React from "react";
import {Grid} from "@mui/material";
// import {observer} from "mobx-react";

// @observer
export class CardsListItemRandom extends React.Component<any, any> {

  randomId () {
    const id = Math.floor(Math.random() * (2000 - 100));
    // *** Work method \/ -> не надо, все и так работает, прокси только визуально
    // console.log( JSON.parse(JSON.stringify(storeCoins.DataData)) );
  }

  render() {
    return (
      <Grid item xs>
        <h1> Under Ground </h1>
      </Grid>
    )
  }
}
