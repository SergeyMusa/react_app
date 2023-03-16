// import StoreCoins from "./StoreCoins";
import {ResponseData} from "./type";
import React from "react";

//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
export class PostData extends React.Component{
    dataData: ResponseData[] = [];

    async doFetchData(fetchUrl:string): Promise<ResponseData[]> { //loadData
        console.log('fetchUrl', fetchUrl)
        try {
            const response = await fetch(fetchUrl)
            const data = await response.json()
            this.dataData = data.dataData;

                // console.log(data) //ok
        // StoreCoins.CoinsTemp = this.dataData;
            // this.state.store.
            // StoreCoins.show();

        } catch (e) {
            console.log(e);
        }
        return this.dataData
    }
}