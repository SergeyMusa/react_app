// import React from 'react';
// import {Component} from "react"; // import component
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {store} from "../store/StoreTimer";

const homeHeader = <h3>TEST-Element</h3>;

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
            {/*<Button variant="contained">Hello World</Button>*/}
        </div>
    )
}

function handleOnClick () {
    console.log('push btn')
    return (
        <Link id="one" to="/Home"></Link>
    )
    // this.props.history.push('/')
};

// * work
export class Home extends React.Component {

  componentDidMount() {
    store.timerActive = false;
    store.timerBeginTime = 0;
    // console.log('timerActive', store.timerActive);
  }

    public render () {
        return (
            <div>
                <h3>Home</h3>
                <Button variant="contained" onClick={handleOnClick}>go home</Button>

                {homeHeader}
                <Welcome/>
                <Welcome2 />
            </div>
        )
    }
}

// export default Home;

// function WhoIsWho ({name, surn}) { //(props) //props.name\/
//     return (
//     <div>
//         <h1>my name is {name.fname} of the {surn}</h1>
//     </div>
//     )
// }