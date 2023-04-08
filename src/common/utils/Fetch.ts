import {ResponseData} from "_common/dto/Type";

export async function doFetchData(URL_COINS: string): Promise<ResponseData[]> {
  try {
    const response = await fetch(URL_COINS);
    console.log(response);
    const data = await response.json()
    return data.Data;
  } catch (error) {
    console.log(error);
  }
}
