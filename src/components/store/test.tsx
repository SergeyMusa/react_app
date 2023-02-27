// importScripts()
import {makeAutoObservable} from "mobx";

class Counter {
    count: number = 0
    constructor() {
        makeAutoObservable(this)
    }
}

export default new Counter()