import Lesson2 from "../pages/Lesson";
import React from "react";

function TestStore (props1) { //{ timerTestData, testProps}
    return (
        <div>
            <hr/>
            <h3>TestStore</h3>
                <h2>{"timerTestData from Lesson=" + props1.pprops}</h2>
            <hr/>
        </div>
    );
}
export default TestStore;

