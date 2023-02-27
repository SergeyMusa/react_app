// import React from "react";   //import React
import React, {Component} from "react"; // import component


function Welcome() {
    return <h1>Hello world</h1>
}

// class SuperWelcome extends React.Component { // str.1
class SuperWelcome extends Component {
    render() {
        return <h1>Hello world 2</h1>
    }
}

function Lesson() {
    return (
        <div>
            <Welcome/>
            <SuperWelcome/>
        </div>
    )
}

setTimeout(function () {
    console.log('hello');
}, 1000);

let user = {
    username: "Jack",
    sayHi: function () {
        console.log(this.username);
    }
}
setTimeout(user.sayHi.bind(user), 1000);

//--------------------------------------------

const Counter = ({counter, func, nimber, string}) => {
    console.log(counter, func, nimber, string);
    return <h1>{`Counter component. Count = ${counter}`}</h1>
}

//Modern
class CounterButton extends Component {
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

        return (
            <div>
                <div>{counter}</div>
                <Counter counter={counter}
                         func={() => {}}
                         nimber={1}
                         string="str"
                />
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export default CounterButton;

// export default Lesson;