import React, {Component} from "react"; // import component
import Search from "../store/Search";
// import {observer} from "mobx-react-lite";
import {observer} from "mobx-react";
import {action, observable} from "mobx";
// import {observe} from 'mobx-decorators';
//--------------------------------------------
// import Counter from "../store/counter";
import counter from "../store/counter";
import store from "../store/Search";
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
    timerTestData: number
    constructor(props) {
        super(props);

        this.timerTestData = 22;
        // TestData.testProps = 'www';
    }
      render (){
        // this.setState(TestData.timerTestData=32);
        return (
            <div>
                <h1> <TestStore pprops={this.timerTestData}/> </h1>
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
