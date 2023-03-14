import React from "react"; //, {Component}
// import styles from './Cards.css';
import Loader from "../../store/Loader/Loader";
import Tab from "./Tab";
// import {EmployersList} from "../Cards/EmployersList";
import Search from "../../store/Search";
// import Store from "../../store/Store";
// import StoreCoins from "../../store/StoreCoins";
import {PostData} from "../../store/PostData";

interface dataFromCrypta {
    dataData: [];
}


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
