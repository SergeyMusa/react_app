import React, {Component} from "react";
// import styles from '.src/styles/Table.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {render} from "react-dom";
import Loader from "../store/Loader";
import Tab from "../store/Tab";
import {value} from "lodash/seq";

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


export class Table extends React.Component {
    state = {
        isLoading: true,
        data: [],
        dataData:[],
        dataCoinInfo: {},
    }

    async componentDidMount() {
// export default class Table extends React.Component{ //< tableProps >
//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
//         const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
        const data = await response.json()
        // console.log('1', data.Data);
        const dataData = data.Data.forEach((value, index) => {
            console.log('2', value, index);
        });


        this.setState({
            isLoading: false,
            data,
            // dataData,
        })
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <Tab
                            data={this.state.dataData}
                        />
                }
            </div>
        )
    }
}
