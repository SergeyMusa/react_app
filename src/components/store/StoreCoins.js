import { observable, action, makeObservable} from "mobx"
// import React from "react";

class StoreCoins {
    CoinsData = [1,2,3]
    // CoinsState = true
    modalId = 0
    modalObj = []
    constructor() {
        makeObservable(this)
        this.state = {
            modalId: observable,
            // CoinsState: observable,
            show: action,
            //
        }
    }

// action
    show = () => {
        // ++this.timeUpdate;
        console.log('CoinsData', this.CoinsData);
    }

}

export default new StoreCoins();

