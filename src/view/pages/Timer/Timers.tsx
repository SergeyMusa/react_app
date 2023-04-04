import React from "react";
import {storeTimer} from "_store/StoreTimer";
import {Timer4} from "_common/utils/Timer4";

export class Timers extends React.Component {

  componentDidMount() {
    storeTimer.doInVisible();
    storeTimer.setTimerBeginTime(9);
  }

  public render() {
    return (
      <div>
        <h3>Timers</h3>
        {/*<hr/><h3>1</h3>*/}
        {/*<Timer1 timerProps={5000}/>*/}
        <hr/>
        <h3>-=2=-</h3>
        {/*<Timer2/>*/}
        <hr/>
        <h3>-=3=-</h3>
        <h4>on huks</h4>
        {/*<Timer3/>*/}
        <hr/>
        <h3>-=4=-</h3>
        <h4>on classes</h4>
        {/*<Timer4 inputTime={"test"}/>*/}
        <Timer4 inputTime={10} messageTimer='Page_Timers' activeTimer={true}/>
        <hr/>
      </div>
    );
  }
}