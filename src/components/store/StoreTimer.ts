import { observable,  makeAutoObservable} from "mobx"
// import React, {Component} from "react";
// import {observer} from "mobx-react";
// import {Store} from "./Store";

export class StoreTimer  {
    @observable timerPauseTime: number = 1
    @observable timerBeginTime: number = 30
    @observable timerActive: boolean = false
    public timerMessage: string = "Time's up"
    public timerMakeFun = () => {console.log('timerActive_tst')}
    public timerShow = (() => {
        console.log(`timer4_timerBeginTime=${this.timerBeginTime}_timerPauseTime=${this.timerPauseTime}`)
    })

    constructor() {
        makeAutoObservable(this, {
        })
    }

// action
    increment = () => {
        this.timerBeginTime = this.timerBeginTime < 99 ? this.timerBeginTime + 1 : 99;
    }
    decrement = () => {
        this.timerBeginTime = this.timerBeginTime > 0 ? this.timerBeginTime - 1 : 0;
    }

    reset = () => {
        this.timerPauseTime = 0;
    }
}

export const store = new StoreTimer();
