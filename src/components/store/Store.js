import { observable, action, makeAutoObservable} from "mobx"
// import React  from "react";
// import {observer} from "mobx-react";

 // @observer
 class Store {
    timerTemp = 0
    timeUpdate = 30
    // timerStart = true

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
        // ++this.timeUpdate;
        this.timeUpdate = this.timeUpdate < 99 ? this.timeUpdate + 1 : 99 ;
        console.log('increment', this.timeUpdate);
    }
    decrement = () => {
        this.timeUpdate =  this.timeUpdate > 0 ?  this.timeUpdate - 1 : 0 ;
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

