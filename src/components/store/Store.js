//import { makeAutoObservable } from "mobx"
// *** для таймер3 - можно удалить?

 // @observer
 export class Store {
    timerTemp = 0
    timeUpdate = 15
     timerFunction = (() => {console.log('timerFunction')})

    // constructor() {
        // makeAutoObservable(this)
    // }

    // !!! start timer !!!

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

export const storeOld = new Store();
