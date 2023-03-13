import {makeObservable, observable, action, makeAutoObservable} from "mobx"
import React, {Component} from "react";
import {observer} from "mobx-react";

class StoreCoins {
    CoinsTemp = [1,2,3]
    CoinsState = true

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

