import React from "react";
import Timer2 from "../store/Timer2";
import Timer3 from "../store/Timer3";
import Timer4 from "../store/Timer4";

export class Timers extends React.Component {
    public render() {
        return (
            <div>
                <h3>Timers</h3>
                {/*<hr/><h3>1</h3>*/}
                {/*<Timer1 timerProps={5000}/>*/}
                <hr/>
                <h3>-=2=-</h3>
                <Timer2/>
                <hr/>
                <h3>-=3=-</h3>
                <h4>on huks</h4>
                <Timer3/>
                <hr/>
                <h3>-=4=-</h3>
                <h4>on classes</h4>
                <Timer4/>
                <hr/>
            </div>
            // <Lesson child={<Button/>}> <Counter/> </Lesson>
        );
    }
}