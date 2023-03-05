import React from "react"; //, {Component}
// import styles from '.src/styles/Table.css';
// import {render} from "react-dom";
import Loader from "../../store/Loader/Loader";
import Tab from "../..//store/Loader/Tab";
import {CryptoCard} from "../../store/CryptoCard";
import EmployersList from "./EmployersList";

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
        // dataData:[],
        dataCoinInfo: {},
    }

    async componentDidMount() {
// export default class Table extends React.Component{ //< tableProps >
//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
//         const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
        const data = await response.json()

        dataData = data.Data;
        // console.log('dataData',dataData) // obj
        // const dataData1 = data.Data.forEach((value, index) => {
        //     console.log('2', value, index);
        // });
        // console.log('1',dataData1);

        this.setState({
            isLoading: false,
            data,
            // dataData,
        })

        // console.log('cry.Data',cry.Data);
        // console.log('data.Data',data.Data);
        // console.log('cry.Data-id-1',data.Data[1].CoinInfo.Id, data.Data[1].CoinInfo.Name);
    }

    render() {
        return (
            <div className="container">
                {/*<EmployersList keyX={+0} dataX={dataData}/>*/}
                {/*<EmployersList keyX={1} dataX={dataData}/>*/}
                {/*<EmployersList keyX={2}/>*/}

                {/*<WhoIsWho name={{fname:'Vova'}} surn='Pupkin'/>*/}
                {/*<WhoIsWho name={{fname:'Serg'}} surn='Musa'/>*/}

                <CryptoCard props={'test'}/>
                {
                    this.state.isLoading
                        ? <Loader/>
                        // : <Tab data={this.state.dataData} />
                        : <EmployersList keyX={3} dataX={dataData}/>
                }

            </div>
        )
    }
}


