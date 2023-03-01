// import React from 'react';
// import {Component} from "react"; // import component
import React, {Component} from "react";

const header = <h3>TEST-Element</h3>;

function Welcome() {
    return <h1>Hello world</h1>
}

// class SuperWelcome extends React.Component { // str.1
class SuperWelcome extends Component {
    render() {
        return <h1>Hello world 2</h1>
    }
}

// (function () { // самовызывающаяся анонимная F
//     return (
//         <div>
//             <Welcome/>
//         </div>
//     )
// }())

function Welcome2 () {
    return (
        <div>
            <SuperWelcome/>
        </div>
    )
}

// * work
export class Home extends React.Component {
    public render () {
        return (
            <div>
                {header}
                <h1>Home</h1>
                <Welcome/>
                <Welcome2 />
            </div>
        )
    }
}

// export default Home;