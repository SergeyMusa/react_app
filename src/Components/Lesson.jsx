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
            <Welcome />
            <SuperWelcome />
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

function f(a, b) {
    console.log(this);
    console.log(a+b);
}
let g = f.bind('Context');
g(1,2);

//Modern
class CounterButton extends Component {
    state = {
        counter: 0,
    }
    handleClick = () => {

    }
}


export default Lesson;