import React from "react"; //, {Component}
// import styles from './Cards.css';
import Loader from "../../store/Loader/Loader";
import Tab from "./Tab";
// import {CryptoCard} from "../../store/CryptoCard";
import {EmployersList} from "../Cards/EmployersList";
import Search from "../../store/Search";
import Store from "../../store/Store";
import StoreCoins from "../../store/StoreCoins";
import {Container, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import {PostData} from "../../store/PostData";

interface dataFromCrypta {
    dataData: [];
}

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

    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

export class Tables extends React.Component<dataFromCrypta> {
    dataData: any[];
    state = {
        isLoading: true,
        data: [],
        // dataCoinInfo: {},
        // store: new StoreCoins(),
        fetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
    }
    componentDidMount() {
        // setInterval(this.loadData, Store.timeUpdate); //30000
        this.loadData().then();

        //     console.log('timeUpdate', Store.timeUpdate);

        // this.setState({
        //     isLoading: false,
        //     dataData, // data,
        // })
    }

    // async componentDidMount() { //loadData
    //     setInterval(this.loadData, Store.timeUpdate); //30000
    //     console.log('timeUpdate', Store.timeUpdate);
    //     try {
    //         const response = await fetch(this.fetchUrl)
    //         const data = await response.json()
    //         dataData = data.Data;
    //         console.log('dataData', dataData)
    //         StoreCoins.CoinsTemp = dataData;
    //         console.log('StoreCoins', StoreCoins.CoinsTemp)
    //         // this.state.store.
    //         StoreCoins.show();
    //             this.setState({
    //             isLoading: false,
    //             dataData, // data,
    //
    //             })
    //         console.log('load_api');
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async loadData () {
        this.dataData = await new PostData().doFetchData(this.state.fetchUrl)  ;
    }


    render() {
        return (
            <div className="table">
                    {/*<button onClick={() => this.componentDidMount()}> LOAD </button>*/}
                <h3>Tables</h3>
                <Search />
                    {
                        this.state.isLoading
                            ? <Loader/>
                            : <Tab data={this.props.dataData} />
                    }
            </div>
        )
    }

}
