import { observable, action, makeAutoObservable} from "mobx"
// import React  from "react";
// import {observer} from "mobx-react";

 // @observer
 export class Store {
    timerTemp = 0
    timeUpdate = 30
     // timerStart = true

    constructor() {
        makeAutoObservable(this)
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
}

export const store = new Store();
