// import { observable, action, makeObservable} from "mobx"
// import React from "react";

import {makeAutoObservable} from "mobx";

class StoreCoins {
  ModalData: any[] = []
  modalId = 0
  // modalItem = {}

  FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
  PreData: [] = []
  ItemData: any
  IsLoading: boolean = true

  searchItems = []
  searchFind = ''

  constructor() {
    makeAutoObservable(this)
    // this.state = {
    // modalId: observable,
    // // CoinsState: observable,
    // show: action,
    //
    // }
  }

// action
  show = () => {
    // ++this.timeUpdate;
    console.log('ModalData', this.ModalData);
    console.log('PreData', this.PreData);
  }

  setData = (loadData) => {
    this.ModalData = loadData
    // this.PreData = this.ModalData
    // console.log('ModalData:', this.ModalData);
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
// export default StoreCoins();