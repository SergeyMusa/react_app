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
export default Lesson;