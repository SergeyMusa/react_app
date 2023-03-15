import {makeAutoObservable, observable, action} from "mobx";
import React from "react";
// import {observer} from "mobx-react";

class Counter { //extends React.Component{ //
// @observable
count1 = 0;
// count3 = 43
    constructor() { //props
            // super(props); //{counter}
            // makeObservable(this)
            makeAutoObservable(this) // don`t work with props
            this.state = {
                count3: observable,
                increment: action,
            }
    }
    // state = {
    //     count2: 0
    // }

    increment = () => {
        ++this.count1;
        // ++this.count3;
        // console.log('inc', this.count1)
    }
    decrement = () => {
        this.count1 = this.count1 - 1;
        // this.props.counter = this.props.counter - 1;
        // this.setState(
        //     this.count2 = this.count2 - 1
        // )
        // console.log('dec', this.count1)
    }
    reset = () => {
        this.count1 = 0;
        // this.props.counter = 0;
        // this.setState(
        //     this.count2 = 0
        // )
        console.log('reset', this.count1)
    }
  // render (){
  //   return (
  //   )
  // }
}
export default new Counter();//
// export default Counter;//new Counter()