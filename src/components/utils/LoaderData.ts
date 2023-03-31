import {storeCoins} from "../store/StoreCoins";
import {PostData} from "./PostData";
// import React from "react";


// export class LoaderData  {
export class LoaderData { //extends React.Component {
  dataData: any;
  // isLoading: boolean = true;
  // state = {
  //   isLoading: true,
  //   // FetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
  //   // oldPrice: [],
  // }

  // componentDidMount() {
  //   this.loadData();
  // }

  async loadData() {
    this.dataData = await new PostData().doFetchData(storeCoins.FetchUrl)

      .then(() => { // ??? refactor twix code
        // this.setState({isLoading: false});
        storeCoins.checkLoading(true); //this.isLoading
        // this.isLoading = false;
      });

    storeCoins.setData(this.dataData);
    console.log('LoaderData...', this.dataData);
  }
}

  export const loaderData = new LoaderData();