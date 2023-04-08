export interface ResponseData {
  CoinInfo: CoinInfo;
  DISPLAY: DISPLAY;
  RAW: RAW;
}

interface CoinInfo {
  Algorithm: string;
  AssetLaunchDate: string;
  BlockNumber: number;
  BlockReward: number;
  BlockTime: number;
  DocumentType: string;
  FullName: string;
  Id: string;
  ImageUrl: string;
  Internal: string;
  MaxSupply: number;
  Name: string;
  NetHashesPerSecond: number;
  ProofType: string;
  Type: number;
  Url: string;
  Rating: Rating;

}

interface Rating {
  Weiss: {
    MarketPerformanceRating: string;
    Rating: string;
    TechnologyAdoptionRating: string;
  }
}

interface DISPLAY {
  USD: {
    PRICE: string;
    FROMSYMBOL: string,
    MKTCAP: string,
    TOTALVOLUME24HTO: string,
  }
}

interface RAW {
  USD: {
    PRICE: number,
    MKTCAP: string,
    TOTALVOLUME24HTO: string
  }
}

export interface inputTimer {
  inputTime?: number;
  messageTimer?: string;
  activeTimer?: boolean;
  functionTimer?(): void;
}
