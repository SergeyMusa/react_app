import React from "react";
import {Timer1} from "../store/Timer1";
import Timer2 from "../store/Timer2";
import Timer3 from "../store/Timer3";
// import Button from '@material-ui/core/Button';
// import Lesson, {CounterX} from "./Lesson";


// export class Footer extends React.Component<props> {

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
                        <Timer3 />
                        <hr/>
                    </div>
                    // <Lesson child={<Button/>}> <Counter/> </Lesson>
                );
        }
}