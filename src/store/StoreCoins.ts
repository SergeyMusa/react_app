import {action, computed, makeAutoObservable, observable} from "mobx";
import {ResponseData} from "_common/dto/Type";
import {doFetchData} from "_common/utils/Fetch";
import {Toggle} from "_common/utils/Toggle";


class StoreCoins {
  @observable public _isBusy = new Toggle(false);
  constructor() {
    makeAutoObservable(this)
  }
  @observable public CoinsList: ResponseData[] = [];
  @observable public coinsCount: string = '10';
  private maxDownloadNumber = 30 ;// limit api
  @observable public coinsLoadDisable: boolean = false; //disabled
  @observable public URL_COINSS: string = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=
                                          ${this.coinsCount}&tsym=USD&
                                          api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`;
  public searchItems: any;
  public searchFind: any;

  @action
  setData = (loadData: ResponseData[]) => {
    this.CoinsList = loadData;
  }

  @action
  setCoinsCount = (loadCount: string) => {
    if (+this.coinsCount < this.maxDownloadNumber) {

      let URL_COINSS = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=
                    ${loadCount}&tsym=USD&
                    api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`;
      this.coinsCount = loadCount;
      this.URL_COINSS = URL_COINSS;
      this.loadData().then();
      this.coinsLoadDisable = false;
    } else {
      this.coinsLoadDisable = true;
    }
  }

  @action
  loadNextCoinsCount = () => {
      this.coinsCount = String(+this.coinsCount + 10);
      this.setCoinsCount(this.coinsCount);
  }

  @computed
  public get changeIsBusy() {
    return this._isBusy.isOpen;
  }

  public async loadData() {
    this._isBusy.open()
    try {
      const data = await doFetchData(this.URL_COINSS);
      this.setData(data);
    } finally {
      this._isBusy.close()
    }
  }

}
export const STORE_COINS = new StoreCoins();
