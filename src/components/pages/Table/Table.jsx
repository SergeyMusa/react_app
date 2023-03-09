import React from "react"; //, {Component}
// import styles from './Table.css';
import Loader from "../../store/Loader/Loader";
// import Tab from "./Tab";
// import {CryptoCard} from "../../store/CryptoCard";
import {EmployersList} from "./EmployersList";
import Search from "../../store/Search";
import {Timer} from "../../store/Timer";

let dataData = [];

// export default props => {
//     const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     return (
//         <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
//             <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
//             <button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
//         </div>
//     )
// }

// function WhoIsWho ({name, surn}) { //(props) //props.name\/
//     return (
//     <div>
//         <h1>my name is {name.fname} of the {surn}</h1>
//     </div>
//     )
// }


export class Table extends React.Component {
    state = {
        isLoading: true,
        data: [],
        // dataCoinInfo: {},
    }

    async componentDidMount() {
// export default class Table extends React.Component{ //< tableProps >
//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
//         const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
        const data = await response.json()

        dataData = data.Data;

        this.setState({
            isLoading: false,
            // data,
            dataData,
        })

        // const dataX=data.data;
        // const x =

        // dataData.forEach(function (item, i, arr) {
        //     <EmployersList data={this.state.dataData}/>
        // })
    }
    render() {
        return (
            <div className="container">
                {/*<EmployersList keyX={1} dataX={dataData}/>*/}
                <button onClick={this.componentDidMount}> LOAD </button>
                <Search />
                <Timer timerProps={5000}/>
                {
                    this.state.isLoading
                        ? <Loader/>
                        // : <Tab data={this.state.dataData} />
                        : <EmployersList data={this.state.dataData}/>
                        // : <CryptoCard data={this.state.dataData}/>
                }
            </div>
        )
    }
}
