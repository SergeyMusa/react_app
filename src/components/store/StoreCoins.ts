// import { observable, action, makeObservable} from "mobx"
// import React from "react";

import {makeAutoObservable} from "mobx";

class StoreCoins {
    ModalData = []
    modalId = 0
    modalItem = {}
    FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`

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

}
export const storeCoins = new StoreCoins();
// export default StoreCoins();