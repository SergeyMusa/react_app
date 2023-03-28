import { observable,  makeAutoObservable} from "mobx"
// import React, {Component} from "react";
// import {observer} from "mobx-react";
// import {Store} from "./Store";

export class StoreTimer  {
    @observable timerPauseTime: number = 1
    @observable timerBeginTime: number = 30
    @observable timerActive: boolean = false
    @observable timerVisible: boolean = false
    public timerMessage: string = "Time's up"
    public timerMakeFun = () => {console.log('>>>>>>>>>>>>> timerActive_tst')}
    public timerShow = (() => {
        console.log(`timer4_timerBeginTime=${this.timerBeginTime}_timerPauseTime=${this.timerPauseTime}`)
    })

    constructor() {
        makeAutoObservable(this, {
        })
    }

// action
    doStart = () => {
        this.timerActive = true;
        this.timerVisible = true;
    }
    doStop = () => {
        this.timerActive = false;
        this.timerVisible = false;
        this.timerBeginTime = 0;
    }
    increment = () => {
        this.timerBeginTime = this.timerBeginTime < 99 ? this.timerBeginTime + 1 : 99;
        console.log('increment', this.timerBeginTime);
    }
    decrement = () => {
        this.timerBeginTime = this.timerBeginTime > 0 ? this.timerBeginTime - 1 : 0;
        console.log('decrement', this.timerBeginTime);
    }

    reset = () => {
        this.timerPauseTime = 0;
    }
}

export const store = new StoreTimer();
