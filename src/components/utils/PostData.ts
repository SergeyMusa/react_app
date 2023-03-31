import {ResponseData} from "../type/Type";

export class PostData {
    dataData: ResponseData[] = [];

    async doFetchData(fetchUrl:string): Promise<ResponseData[]> { //loadData
        try {
            const response = await fetch(fetchUrl)
            const data = await response.json()
            this.dataData = data.Data;
        // StoreCoins.CoinsTemp = this.dataData;
            // StoreCoins.show();

        } catch (e) {
            console.log(e);
        }
        return this.dataData
    }
}

//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")

