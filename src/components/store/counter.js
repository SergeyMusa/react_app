import {makeAutoObservable} from "mobx";

class Counter {
    count = 0
    constructor() {
        makeAutoObservable(this)
    }
}

export default new Counter()