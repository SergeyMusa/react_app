import React from "react";
import {storeTimer} from "_store/StoreTimer";
import {HomePresentation} from "_view/pages/Home/components/HomePresentation";
import {observer} from "mobx-react";

@observer
export class Home extends React.Component {
  public componentDidMount() {
    storeTimer.doStop();
    storeTimer.doInVisible();
  }

  public render() {
    return (
      <>
        <h3>Home</h3>
        <HomePresentation/>
        <br/>
      </>
    )
  }
}
