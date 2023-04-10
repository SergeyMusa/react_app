import {ResponseData} from "_common/dto/Type";
import {URL_COINS} from "_common/const/Const";

export async function doFetchData(URL_COINSs: string): Promise<ResponseData[]> {
  try {
    // const response = await fetch(URL_COINSs);
    const response = await fetch(URL_COINS);
    console.log(response);
    const data = await response.json()
    return data.Data;
  } catch (error) {
    console.log(error);
  }
}
