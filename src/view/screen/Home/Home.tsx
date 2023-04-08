import React from "react";
import {HomePresentation} from "_view/screen/Home/components/HomePresentation";
import {observer} from "mobx-react";

@observer
export class Home extends React.Component {
  public render() {
    return (
      <>
        <h3>Home</h3>
        <HomePresentation />
        <br/>
      </>
    )
  }
}
