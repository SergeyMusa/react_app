import { observable, action, makeObservable} from "mobx"
// import React from "react";

class StoreCoins {
    ModalData = []
    // CoinsState = true
    modalId = 0
    modalItem = {}
    constructor() {
        // makeObservable(this)
        this.state = {
            // modalId: observable,
            // // CoinsState: observable,
            // show: action,
            //
        }
    }

// action
    show = () => {
        // ++this.timeUpdate;
        console.log('ModalData', this.ModalData);
    }

}

export default new StoreCoins();

