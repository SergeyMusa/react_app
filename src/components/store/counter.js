// importScripts()
import {makeAutoObservable, makeObservable} from "mobx";
import React from "react";

// export class Counter extends React.Component {
class Counter { // extends React.Component
    count1 = 0;
    constructor() { //props
            // super(props); //{counter}
            // makeObservable(this)
            makeAutoObservable(this) // don`t work with props

            this.state = {
                count3: 42
            }
    }
    state = {
        count2: 0
    }

    increment = () => {
        ++this.count1;
        // ++this.props.counter ;
        // this.setState (state => ({
        //     count2: state.count2 + 1
        // }))
        console.log('inc', this.count1)
    }
    decrement = () => {
        this.count1 = this.count1 - 1;
        // this.props.counter = this.props.counter - 1;
        // this.setState(
        //     this.count2 = this.count2 - 1
        // )
        console.log('dec', this.count1)
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
export default new Counter()