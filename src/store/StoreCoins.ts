import {action, makeAutoObservable, observable} from "mobx";
import {ResponseData} from "_common/dto/Type";


class StoreCoins {
  constructor() {
    makeAutoObservable(this)
  }

  @observable public CoinsList: ResponseData[] = [];
  @observable public coinsCount: string = '10';
  @observable public URL_COINSS: string = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${this.coinsCount}&tsym=USD&api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`;

  public searchItems: any;
  public searchFind: any;

  @action
  setData = (loadData: ResponseData[]) => {
    this.CoinsList = loadData;
  }

  @action
  setCoinsCount = (loadCount: string) => {
    let URL_COINSS = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${loadCount}&tsym=USD&api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`;
    this.coinsCount = loadCount;
    this.URL_COINSS = URL_COINSS ;
  }
}

export const STORE_COINS = new StoreCoins();
