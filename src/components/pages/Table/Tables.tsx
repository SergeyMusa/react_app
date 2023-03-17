import React from "react"; //, {Component}
// import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {Tab} from "./Tab";
// import {CardsList} from "../Cards/CardsList";
import Search from "../../store/Search";
// import Store from "../../store/Store";
// import StoreCoins from "../../store/StoreCoins";
import {PostData} from "../../store/PostData";
import {propsDataCryptaFromPostData} from "../../store/type";
// import login from "../../auth/login/login"; // ??? , FetchUrl

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
        this.loadData().then(() => {
            this.setState({isLoading: false}); // !!! DONT WORK
            // this.state.isLoading = false;
        });
    }

    public async loadData() {
        this.dataData = await new PostData().doFetchData(this.state.FetchUrl);
    }

    render() {
        return (
            <div className="table">
                {/*<button onClick={() => this.componentDidMount()}> LOAD </button>*/}
                <h3>Tables</h3>
                <Search/>
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <Tab data={this.dataData} />
                }
            </div>
        )
    }
}
