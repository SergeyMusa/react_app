import { makeObservable, observable, action } from "mobx"
import React from "react";

export class store {
    // class TimerSet {
        timeUpdate: number = 30
        timerStart: boolean = true
    // }
        // const TimerSet {
        //     timeUpdate: number = 30,
        // }
    constructor() {
        makeObservable(this, {
            timeUpdate: observable,
            increment: action
        })
    }

// action
    increment() {
        // Intermediate states will not become visible to observers.
        this.timeUpdate++
    }

    // decrement() {
    //     this.timeUpdate--
    // }
    // return {
    //    timeUpdate
    // }
}

