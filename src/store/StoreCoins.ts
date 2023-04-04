import {action, makeAutoObservable, observable} from "mobx";
import {ResponseData} from "_common/type/Type";

class StoreCoins {
  constructor() {
    makeAutoObservable(this)
  }

  @observable public CoinsList: ResponseData[] = []
  public searchItems: any;
  public searchFind: any;

  @action
  setData = (loadData: ResponseData[]) => {
    this.CoinsList = loadData
  }
}

export const STORE_COINS = new StoreCoins();
