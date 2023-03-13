import React from "react";
// import {Timer1} from "../store/Timer1";
import Timer2 from "../store/Timer2";
import Timer3 from "../store/Timer3";
import Timer4 from "../store/Timer4";
// import Button from '@material-ui/core/Button';
// import Lesson, {CounterX} from "./Lesson";
// import {observer} from "mobx-react";

// export class Footer extends React.Component<props> {

// @observer
export class Timers extends React.Component {
        public render () {
                return (
                    <div>
                        <h1>Timers</h1>
                        {/*<hr/><h3>1</h3>*/}
                        {/*<Timer1 timerProps={5000}/>*/}
                        <hr/><h3>-=2=-</h3>
                        <Timer2 />
                        <hr/><h3>-=3=-</h3>
                        {/*<Timer3 />*/}
                        {/*    <hr/><h3>-=4=-</h3>*/}
                            <Timer4 />
                        <hr/>
                    </div>
                    // <Lesson child={<Button/>}> <Counter/> </Lesson>
                );
        }
}