import {makeAutoObservable} from "mobx";

class Counter {
// @observable
  count1 = 0;

  constructor() {
    makeAutoObservable(this)
  }

  increment = () => {
    ++this.count1;
  }

  decrement = () => {
    this.count1 = this.count1 - 1;
    // this.setState(
    //     this.count2 = this.count2 - 1
    // )
  }

  reset = () => {
    this.count1 = 0;
    console.log('reset', this.count1)
  }
}

export const counter = new Counter();