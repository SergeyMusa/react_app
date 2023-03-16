// import StoreCoins from "./StoreCoins";
import {ResponseData} from "./type";

//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
export class PostData {
    dataData: ResponseData[] = [];

    async doFetchData(fetchUrl:string): Promise<ResponseData[]> { //loadData
        // console.log('fetchUrl', fetchUrl)
        try {
            const response = await fetch(fetchUrl)
            const data = await response.json()
            this.dataData = data.Data;
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