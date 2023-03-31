// import { observable, action, makeObservable} from "mobx"
// import React from "react";

import {makeAutoObservable} from "mobx";

class StoreCoins {
  ModalData = []
  modalId = 0
  // modalItem = {}

  FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
  DataData: [] = []
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
  }

  setData = (loadData) => {
    this.DataData = loadData
    // console.log('DataData:', this.DataData);
  }
  setItemData = (loadItemData) => {
    this.ItemData = loadItemData
  }
  setId = (id) => {
    this.modalId = id
  }
  checkLoading = (loadState) => {
    this.IsLoading = !loadState;
    // console.log('DataData:', this.DataData);
  }

}
export const storeCoins = new StoreCoins();
// export default StoreCoins();