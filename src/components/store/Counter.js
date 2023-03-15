import { makeAutoObservable } from "mobx";
// import React from "react";
// import {observer} from "mobx-react";

class Counter { //extends React.Component{ //
// @observable
    count1 = 0;
    constructor() { //props
        // super(props); //{counter}
        // this.state = {
        //     count3: observable,
        //     increment: action,
        // }
        makeAutoObservable(this) // don`t work with props > state
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