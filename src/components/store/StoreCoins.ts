import {makeAutoObservable, observable} from "mobx";

class StoreCoins {
  @observable ModalData: any[] = []
  modalId = 0
  public IsLoading: boolean = true
  // public FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
  public FetchUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
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
