import { makeObservable, observable, action } from "mobx"
import React, {Component} from "react";
import {observer} from "mobx-react";

 class Store extends Component {
    @observable timerTestData: number = 44
        timeUpdate: number = 30
        timerStart: boolean = true
    constructor(props) {
        super(props);
        makeObservable(this, {
            timeUpdate: observable,
            increment: action,
            decrement: action,
        })
    }

// action
    increment() {
        this.timeUpdate++
    }
    decrement = () => {
        this.timeUpdate--
    }
    // return {
    //    timeUpdate
    // }
}
export default observer (Store);

