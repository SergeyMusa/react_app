export interface FetchUrl {
  FetchUrl?: string;
}

export interface propsDataCryptaFromPostData {
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
  DISPLAY: {
    USD: {
      FROMSYMBOL: string,
    }
  }
  RAW: {
    USD: {
      PRICE: number | string,
      MKTCAP: string,
      TOTALVOLUME24HTO: string
    }
  }
}

export interface inputTimer {
  inputTime?: number;
  messageTimer?: string;
  activeTimer?: boolean;

  functionTimer?(): void;
}
