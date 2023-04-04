import React, {Component} from "react";
import {Link} from "react-router-dom";
import {storeTimer} from "../../store/StoreTimer";
import {HomePresentation} from "./HomePresentation";
import Button from "@mui/material/Button";

const homeHeader = <h2>TEST-Element</h2>;

export class Home extends React.Component {
  componentDidMount() {
    storeTimer.doStop();
    storeTimer.doInVisible();
  }

  public render() {
    return (
      <>
        <h3>Home</h3>
        <HomePresentation />
        <br/>
        <Button variant="contained" onClick={handleOnClick}>go home</Button>
        {homeHeader}
        <Welcome/>
        <Welcome2/>
      </>
    )
  }
}

function Welcome() {
  return <h2>Hello world</h2>
}

function Welcome2() {
  return (
    <>
      <SuperWelcome/>
      {/*'Lorem ipsum dolor sit amet.'*/}
    </>
  )
}

class SuperWelcome extends Component {
  render() {
    return <h3>Hello world 2</h3>
  }
}

function handleOnClick() {
  console.log('push btn')
  return (
    <Link id="one" to="/Home"></Link>
  )
}
