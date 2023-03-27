import React from "react"; //, {Component}
import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {CardsList} from "./CardsList";
import Search from "../../store/Search";
import {PostData} from "../../store/PostData";
import {store} from "../../store/StoreTimer";

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
        FetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
    }
    componentDidMount() {
        console.log('timerActive',store.timerActive);
        store.timerActive = true;
        console.log('timerActive',store.timerActive);
        store.timerBeginTime = 15;
        // store.timerMakeFun = console.log('timerActive');

        this.loadData().then(() => { // ??? refactor late twix code
            this.setState({ isLoading: false }) ; // !!! WORK?  // this.state.isLoading = false ;
            // console.log('!!!');
            // console.log(this.dataData[ this.dataData.findIndex(dataData => dataData.CoinInfo.Id == "5031") ]); // index=del(+1) , nativ +1
            // console.log( this.dataData[3] );

        } );
    }

    async loadData () { // ??? можно ли await в componentDidMount
        this.dataData = await new PostData().doFetchData(this.state.FetchUrl) ;
        //
        // !!! add timer load
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
                        : <CardsList data={this.dataData}/>
                }
            </div>
        )
    }
}
