import {ResponseData} from "_common/dto/Type";
// import {URL_COINS} from "_common/const/Const";
import {STORE_COINS} from "_store/StoreCoins";

export async function doFetchData(URL_COINS: string): Promise<ResponseData[]> {
  try {
    const response = await fetch(URL_COINS || STORE_COINS.URL_COINSS);
    // console.log('response',response);
    const data = await response.json()
    return data.Data;
  } catch (error) {
    console.log(error);
  }
}
