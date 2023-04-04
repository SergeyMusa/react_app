import {makeAutoObservable, observable} from "mobx";

class StoreCoins {
  @observable ModalData: any[] = []
  modalId = 0
  public IsLoading: boolean = true
  // public FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
  public FetchUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`
  PreData: [] = []
  ItemData: any
  searchItems = []
  searchFind = ''

  constructor() {
    makeAutoObservable(this)
  }

  show = () => {
    // ++this.timeUpdate;
    console.log('ModalData', this.ModalData);
    console.log('PreData', this.PreData);
  }

  setData = (loadData) => {
    this.ModalData = loadData
  }
  setPreData = (loadPreData) => {
    this.PreData = loadPreData
    console.log('PreData:', this.PreData);
  }
  setItemData = (loadItemData) => {
    this.ItemData = loadItemData
  }
  setId = (id) => {
    this.modalId = id
  }
  checkLoading = (loadState) => { // ??? is Used? change on Toggle
    this.IsLoading = !loadState;
    // console.log('DataData:', this.DataData);
  }
}

export const storeCoins = new StoreCoins();
