// import { observable, action, makeObservable} from "mobx"
// import React from "react";

export class StoreCoins {
    ModalData = []
    modalId = 0
    modalItem = {}
    FetchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`

    // constructor() {
        // makeObservable(this)
        // this.state = {
            // modalId: observable,
            // // CoinsState: observable,
            // show: action,
            //
        // }
    // }

// action
    show = () => {
        // ++this.timeUpdate;
        console.log('ModalData', this.ModalData);
    }

}

// export default new StoreCoins();
export const storeCoins = new StoreCoins();