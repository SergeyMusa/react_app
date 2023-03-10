import React, {Component} from "react"; // import component
import Search from "../store/Search";
// import {observer} from "mobx-react-lite";
import {observer} from "mobx-react";
import {action, computed, observable, makeObservable, makeAutoObservable} from "mobx";
// import {observe} from 'mobx-decorators';
//--------------------------------------------
import Counter from "../store/Counter";
import Store from "../store/Store";
import TestStore from "../store/TestStore";
import {number} from "prop-types";

// @observable class countZerro {
//     countZ:number = 0;
//     incCountZ = () => {++this.number};
// }

//     @action(
//         incZ = ++incZ
//     )
// )

// @observer let Lesson2: () => JSX.Element;
// Lesson2 = () => {
// @observer export default class Lesson2 extends Component<any, any> {
@observer export default class Lesson2 extends Component{
    // TestData: {
    //     timerTestData: number,
    //     testProps: string,
    // };
    @observable timerTestData: number = 42
    value: number
    double: any
    increment:any
    constructor(value) {
        super(value);
        // makeObservable(this,
        //     {
        //     value : observable,
        //     double: computed,
        //     increment: action,
        //     // TestData.testProps = 'www';
        // })
        // this.value = value
    }

      render (){
        // this.setState(TestData.timerTestData=32);
        //   console.log('timerTestData',this.timerTestData);
        //   console.log('Store', Store.timerTestData)
        return (
            <div>
                <h3>Lesson</h3>
                <h1> <TestStore pprops={this.timerTestData}/> </h1>
                {/*    */}
                {/*<h3>{`countZ = ${this.TimerSet.timeUpdate}`}h</h3>*/}
                {/*<button onClick={() => this.incCountZ()}>+++</button>*/}
                <h3>{"Counter = " + Counter.count1}</h3>
                {/*<h3>{"Counter1 = "+ counter.count1 }</h3>*/}
                {/*<h3>{"Counter2 = "+ counter.count3 }</h3>*/}
                <button onClick={() => Counter.increment()}>+++</button>
                <button onClick={() => Counter.decrement()}>---</button>
                <button onClick={() => Counter.reset()}>=zero=</button>
            </div>
        )
        // }
    };
}

{/*export default Lesson2;*/}


// export class Lesson extends Component {
//     // static propTypes = {
//     //     children: PropTypes.element,
//     // }
//     // static defaultProps = {
//     //     children: null,
//     // }
//     // counter: 1;
//     state = {
//         counter0: 0,
//     }
//     handleClick = () => {
//         this.setState(({this.counter}) => ({
//             counter0: ++counter,
//         }))
//     }
//
//     render() {
//         const {counter0} = this.state;
//         const {children, child} = this.props;
//
//         return (
//
//             <div>
//                 <Search
//                     // value={search}
//                     // onChange={handleChange}
//                 ></Search>
//                 <div>{counter0}</div>
//                 {child}
//                 {children}
//                 {/*{React.cloneElement(children, {counter: this.state.counter})} // dont work*/}
//                 {/*<Counter counter={counter} />*/}
//                 <button onClick={this.handleClick}> [ +1 ] </button>
//                 {/*<button onClick=<Counter counter/> [ +1 ] </button>*/}
//             </div>
//         );
//     }
// }
//
