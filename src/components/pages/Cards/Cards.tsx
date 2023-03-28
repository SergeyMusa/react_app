import React from "react"; //, {Component}
import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {CardsList} from "./CardsList";
import Search from "../../store/Search";
import {PostData} from "../../store/PostData";
import {storeTimer} from "../../store/StoreTimer";
import {storeCoins} from "../../store/StoreCoins";

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

export class Cards extends React.Component<any, any> {
    dataData: any[];

    state = {
        isLoading: true,
        modalActive: false,
        setModalActive: false,
        // FetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
    }
    componentDidMount() {
        // console.log('timerActive',store.timerActive);
        storeTimer.doStart();
        storeTimer.timerBeginTime = 15;
        // storeTimer.timerMakeFun = () => {console.log('>>> timerActive_tst <<<')} // *** work
        // storeTimer.timerMakeFun = () => { new Cards(storeCoins.FetchUrl).componentDidMount() } // ??? как по другому?

        this.loadData().then(() => { // ??? refactor late twix code
            this.setState({ isLoading: false });
        } );
    }

    async loadData () { // ??? можно ли await в componentDidMount
        this.dataData = await new PostData().doFetchData(storeCoins.FetchUrl) ;
        console.log('load_data...');
    }

    public render() {
        return (
            <div className="cards">
                <h3>Cards</h3>
                <button onClick={() => this.componentDidMount()}>[ LOAD ]</button>
                <Search/>

                {
                    this.state.isLoading
                        ? <Loader/>
                        : <CardsList data={this.dataData}  />
                }
            </div>
        )
    }
}
