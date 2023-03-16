import React from "react"; //, {Component}
// import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {Tab} from "./Tab";
// import {CardsList} from "../Cards/CardsList";
import Search from "../../store/Search";
// import Store from "../../store/Store";
// import StoreCoins from "../../store/StoreCoins";
import {PostData} from "../../store/PostData";
import {propsDataCryptaFromPostData} from "../../store/type"; // ??? , FetchUrl

export class Tables extends React.Component<propsDataCryptaFromPostData> {
    dataData: any[];
    state = {
        isLoading: true,
        // data: [],
        // dataCoinInfo: {},
        // store: new StoreCoins(),
        FetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
    }
    componentDidMount = () => {
        // setInterval(this.loadData, Store.timeUpdate); //30000
        //     console.log('timeUpdate', Store.timeUpdate);
        console.log('isLoading 0 ', this.state.isLoading);
        this.loadData().then( );

        console.log('isLoading 1 ', this.state.isLoading);
         this.setState({ isLoading: false }) ; // !!! DONT WORK
        this.state.isLoading = false ;
        console.log('isLoading 2 ', this.state.isLoading);
// !!! исправить восстановить прелоадер
    }
    public async loadData () {
        this.dataData = await new PostData().doFetchData(this.state.FetchUrl);
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
                            : <Tab data={this.dataData} />
                    }
            </div>
        )
    }
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
