import React from "react"; //, {Component}
import './Cards.css';
import {CardsList} from "./CardsList";
import {storeTimer} from "../../store/StoreTimer";
import {storeCoins} from "../../store/StoreCoins";
// import {inputTimer} from "../../type/Type";
import {PostData} from "../../utils/PostData";
import Search from "../../utils/Search";
import LoaderSpiner from "../../utils/LoaderSpiner/LoaderSpiner";
import {observable} from "mobx";
import {observer} from "mobx-react";

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

@observer
export class Cards extends React.Component<any, any> {
  // @observable
  dataData: any[];
  state = {
    isLoading: true,
    modalActive: false,
    setModalActive: false,
    oldPrice: [],
  }

  componentDidMount() {
    // console.log('Cards_componentDidMount');
    storeTimer.setTimerBeginTime(15);
    storeTimer.setTimerFunction( () => new Cards(storeCoins.FetchUrl).startTimer() );
    this.startTimer();

  }

  startTimer = () => {
    storeTimer.doVisible();
    storeTimer.doStart();

    this.loadData().then(() => { // ??? refactor late twix code
      this.setState({ isLoading: false });
    } );

    console.log('load_data...');

    // this.randomId(); // !!! - remake it
  }

  private async loadData () {
    this.dataData = await new PostData().doFetchData(storeCoins.FetchUrl) ;
    storeCoins.setData(this.dataData);
  }

  randomId () {
    const id = Math.floor(Math.random() * (2000 - 100));
    // *** Work method \/ -> не надо, все и так работает, прокси только визуально
    // console.log( JSON.parse(JSON.stringify(storeCoins.DataData)) );
  }

  // listAllSuppliers = async () => {
  //   return await axios
  //     .get(`http://localhost:8080/api/suppliers/supplier/list`)
  //     .then((response) => {
  //       let apiResults = response.data;
  //       console.log(apiResults);
  //       this.setState({ supplier: apiResults });
  //     })
  //     .catch((error) => {
  //       this.setState({ errorMessage: this.state.errorMessage.push(error) });
  //     });
  // };

  public render() {
    return (
      <div className="cards">
        <h3>Cards</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>
        <Search props={"xxx"}/>
        {
          this.state.isLoading
            ? <LoaderSpiner/>
            : <CardsList data={this.dataData}  />
        }
      </div>
    )
  }
}
