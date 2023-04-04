import React, {Component} from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import {storeTimer} from "../store/StoreTimer";

const homeHeader = <h3>TEST-Element</h3>;

function Welcome() {
  return <h1>Hello world</h1>
}

class SuperWelcome extends Component {
  render() {
    return <h1>Hello world 2</h1>
  }
}

function Welcome2() {
  return (
    <div>
      <SuperWelcome/>
    </div>
  )
}

function handleOnClick() {
  console.log('push btn')
  return (
    <Link id="one" to="/Home"></Link>
  )
};

// * work
export class Home extends React.Component {

  componentDidMount() {
    storeTimer.doStop();
    storeTimer.doInVisible();
  }

  public render() {
    return (
      <div>
        <h3>Home</h3>
        <Button variant="contained" onClick={handleOnClick}>go home</Button>

        {homeHeader}
        <Welcome/>
        <Welcome2/>
      </div>
    )
  }
}
