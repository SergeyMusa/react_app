// importScripts()
import {makeAutoObservable} from "mobx";

class Counter {
    count: number = 0
    constructor() {
        makeAutoObservable(this)
    }
    increment() {
        ++this.count
        // console.log("+", this.count)
    }
    decrement() {
        --this.count
    }
}

// class Timer extends Component<Props /**[0] */> {
//     public static readonly defaultProps = {
//         message: `Done!`,
//     };
//
//     constructor(props: Props) {
//         super(props);
//
//         props.message; // Ok
//         this.props.message; // Ok [1]
//     }
// }

export default new Counter()