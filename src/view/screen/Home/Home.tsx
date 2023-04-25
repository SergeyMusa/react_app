import React from "react";
import {HomePresentation} from "_view/screen/Home/components/HomePresentation";
import {observer} from "mobx-react";
import {STORE_TIMER} from "_store/StoreTimer";

@observer
export class Home extends React.Component {
  public render() {
    STORE_TIMER.stop();
    return (
      <>
        <h3>Home</h3>
        <HomePresentation />
      </>
    )
  }
}
