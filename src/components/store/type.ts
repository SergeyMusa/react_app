import {string} from "prop-types";

export interface FetchUrl {
    fetchUrl: string;
}

export interface dataFromCrypta {
    dataData: [];
}

export type ResponseData = {
    CoinInfo: {
        Id: number,
        Name: string,
        ImageUrl: string,
        FullName: string,
        Url: string,
        NetHashesPerSecond: string,
    }
    DISPLAY:{
        USD:{
            FROMSYMBOL: string,
        }
    }
    RAW:{
        USD:{
            PRICE: number | string,
        }
    }
}