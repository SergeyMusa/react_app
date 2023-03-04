import React, {Component} from "react"; // import component
// import Counter from "./store/Counter";
// import {PropTypes} from "prop-types"; //mobx-react"


//--------------------------------------------

export const Counter = ({counter = 0}) => {
    return <h1>{`Counter component. Count = ${counter}`}</h1>
}

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

export class Lesson extends Component {

    // static propTypes = {
    //     children: PropTypes.element,
    // }
    // static defaultProps = {
    //     children: null,
    // }
    state = {
        counter: 0,
    }
    handleClick = () => {
        // this.setState(prevState => ({
        //     counter: ++prevState.counter,
        this.setState(({counter}) => ({
            counter: ++counter,
        }))
    }

    render() {
        const {counter} = this.state;
        const {children, child} = this.props;

        return (
            <div>
                <div>{counter}</div>
                {child}
                {children}
                {/*{React.cloneElement(children, {counter: this.state.counter})} // dont work*/}
                {/*<Counter counter={counter} />*/}
                <button onClick={this.handleClick}> [ +1 ] </button>
            </div>
        );
    }
}

export default Lesson;
// export default CounterDo;

// export default Lesson;