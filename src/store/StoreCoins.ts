import {action, makeAutoObservable, observable} from "mobx";
import {ResponseData} from "_common/dto/Type";

class StoreCoins {
  constructor() {
    makeAutoObservable(this)
  }

  @observable public CoinsList: ResponseData[] = []
  @observable public coinsCount: string;
  public searchItems: any;
  public searchFind: any;

  @action
  setData = (loadData: ResponseData[]) => {
    this.CoinsList = loadData
  }

  @action
  setCoinsCount = (loadCount: string) => {
    this.coinsCount = loadCount;
    console.log('coinsCount', this.coinsCount)
  }
}

export const STORE_COINS = new StoreCoins();
