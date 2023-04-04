import React, {Component} from "react"; // import component
import {observer} from "mobx-react";
import {observable} from "mobx";
import {counter} from "./Counter";

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
    // increment:any
    // constructor(value) {
    //     super(value);
    //     // makeObservable(this,
    // }

      render (){
        // this.setState(TestData.timerTestData=32);
        //   console.log('timerTestData',this.timerTestData);
        //   console.log('store', store.timerTestData)
        return (
            <div>
                <h3>Lesson</h3>
                {/*<h1> <TestStore pprops={this.timerTestData}/> </h1>*/}
                {/*    */}
                {/*<h3>{`countZ = ${this.TimerSet.timeUpdate}`}h</h3>*/}
                {/*<button onClick={() => this.incCountZ()}>+++</button>*/}
                <h3>{"Counter = " + counter.count1}</h3>
                {/*<h3>{"Counter1 = "+ counter.count1 }</h3>*/}
                {/*<h3>{"Counter2 = "+ counter.count3 }</h3>*/}
                <button onClick={() => counter.increment()}>+++</button>
                <button onClick={() => counter.decrement()}>---</button>
                <button onClick={() => counter.reset()}>=zero=</button>
            </div>
        )
        // }
    };
}


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
