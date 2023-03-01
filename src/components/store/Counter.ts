// importScripts()
import {makeAutoObservable} from "mobx";

class Counter {
    count: number = 0
    constructor() {
        makeAutoObservable(this)
    }
    increment() {
        ++this.count
        // console.log("+", this.count)
    }
    decrement() {
        --this.count
    }
}

export default new Counter()