import {makeObservable, observable, action, makeAutoObservable} from "mobx"
import React, {Component} from "react";
import {observer} from "mobx-react";

class Store {
    timerTemp = 0
    timeUpdate = 30
    timerStart = true

    constructor() {
        makeAutoObservable(this)
        this.state = {
            timerTemp: observable,
            timeUpdate: observable,
            increment: action,
            decrement: action,
        }
    }

// action
    increment = () => {
        ++this.timeUpdate;
        console.log('increment', this.timeUpdate);
    }
    decrement = () => {
        this.timeUpdate =  this.timeUpdate - 1;
        console.log('decrement', this.timeUpdate);
    }
    reset = () => {
        this.timerTemp = 0;
    }
    // return {
    //    timeUpdate
    // }
}

export default new Store();

