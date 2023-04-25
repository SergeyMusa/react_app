import {ResponseData} from "_common/dto/Type";
// import {URL_COINS} from "_common/const/Const";
import {STORE_COINS} from "_store/StoreCoins";
// import {PLUG_JSON} from "_common/const/Const";

export async function doFetchData(URL_COINS: string): Promise<ResponseData[]> {
  try {
    const response = await fetch(URL_COINS || STORE_COINS.URL_COINSS );
    const data = await response.json()
    return data.Data;
  } catch (error) {
    console.log('-ERROR- ',error);
    // const data = JSON.parse(PLUG_JSON);
    const data = require('/src/assets/json/plug.json');
    return data.Data;
  }
}
