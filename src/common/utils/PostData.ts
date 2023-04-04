import {ResponseData} from "../type/Type";

export async function doFetchData(fetchUrl: string): Promise<ResponseData[]> {
  try {
    const response = await fetch(fetchUrl)
    const data = await response.json()
    return data.Data;
  } catch (error) {
    console.log(error);
  }
}
