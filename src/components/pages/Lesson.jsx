import React, {Component} from "react"; // import component
// import Counter from "../store/counter";
import counter from "../store/counter";
import {CounterDo} from "../utils/Count";
// import {PropTypes} from "prop-types"; //mobx-react"
import Search from "../store/Search";
import {observer} from "mobx-react-lite";
import TimerSlider from "../store/TimerSlider";

//--------------------------------------------

// export const CounterX = ({counter = 0}) => {
//     return <h1>{`Counter component. Count = ${counter}`}</h1>
// }

//
// Counter.propTypes = {
//     counter: PropTypes.number, //обязательный .isRequired
//     func: PropTypes.func,
//     number: PropTypes.number,
//     string: PropTypes.string,
// }
// Counter.defaultProps = {
//     func: () => {},
//     number: 1,
//     string: 'stringi'
// }
// class CounterButton extends Component {
export const Button = () => (
    <button>--Simple BTN--</button>
)

// export class Lesson2 extends Component {
const Lesson2 = observer( () => {
    // render {
        return(
             <div>
                 <h3>{"Counter = "+ counter.count1}</h3>
                 <h3>{"TimerSlider = "+ counter.count1}</h3>
                 {/*<h3>{"Counter1 = "+ counter.count1 }</h3>*/}
                 {/*<h3>{"Counter2 = "+ counter.count3 }</h3>*/}
                <button onClick={() => counter.increment()}>+++</button>
                <button onClick={() => counter.decrement()}>---</button>
                <button onClick={() => counter.reset()}>=zero=</button>
            </div>
        )
    // }
})
export default Lesson2;

export class Lesson extends Component {
    // static propTypes = {
    //     children: PropTypes.element,
    // }
    // static defaultProps = {
    //     children: null,
    // }
    state = {
        counter0: 0,
    }
    handleClick = () => {
        // this.setState(prevState => ({
        //     counter: ++prevState.counter,
        // <Counter props={counter}/>
        this.setState(({counter}) => ({
            counter0: ++counter,
        }))
    }

    render() {
        const {counter0} = this.state;
        const {children, child} = this.props;

        return (

            <div>
                <Search
                    // value={search}
                    // onChange={handleChange}
                ></Search>
                <div>{counter0}</div>
                {child}
                {children}
                {/*{React.cloneElement(children, {counter: this.state.counter})} // dont work*/}
                {/*<Counter counter={counter} />*/}
                <button onClick={this.handleClick}> [ +1 ] </button>
                {/*<button onClick=<Counter counter/> [ +1 ] </button>*/}
            </div>
        );
    }
}

