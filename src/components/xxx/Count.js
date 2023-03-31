// get any number
// return number+1
// late add id.counter
import {observer} from "mobx-react";
// import {Counter} from "../store/counter";
import React, {Component} from "react"; // import component

let count = 0;

function Count() {
    try {
        function* count(number, id = 1) { //( )
            // console.log(id)
            for (let i = 0; i < number; i++) {
                yield i;
            }
            console.log(this.i)
            return this.i;
        }
    } catch (e) {
        console.log("input not number", e)
    }
}

// @ts-ignore
const CounterDo = observer( () => {
    return (
        <div className="counter">
            {/*{"Count = " + counter.count}*/}
            <div className="btns">
    <button className="btn" onClick={() => {
        // counter.increment()
    }}> +++
        </button>
    <button className="btn" onClick={() => {
        // counter.decrement()
    }}> ---
        </button>
    </div>
    </div>
);
})
// CounterDo();


setTimeout(function () {
    console.log('hello');
}, 1000);

let user = {
    username: "Jack",
    sayHi: function () {
        console.log(this.username);
    }
}
setTimeout(user.sayHi.bind(user), 1000);


// export default Count;
// export default new Counter()
export {Count} ;
export {CounterDo} ;