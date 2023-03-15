import { observable, action, makeAutoObservable} from "mobx"
// import React from "react";

class StoreCoins {
    CoinsTemp = [1,2,3]
    // CoinsState = true

    constructor() {
        makeAutoObservable(this)
        this.state = {
            CoinsTemp: observable,
            CoinsState: observable,
            show: action,
        }
    }

// action
    show = () => {
        // ++this.timeUpdate;
        console.log('CoinsTemp', this.CoinsTemp);
    }

}

export default new StoreCoins();

