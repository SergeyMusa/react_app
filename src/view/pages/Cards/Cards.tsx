import React from "react";
import './Cards.css';
import {CardsList} from "./CardsList";
import {observer} from "mobx-react";
import {storeCoins} from "_store/StoreCoins";
import {storeTimer} from "_store/StoreTimer";
import {PostData} from "_common/utils/PostData";
import Search from "_common/utils/Search";
import {LoaderSpinner} from "_common/utils/LoaderSpiner/LoaderSpiner";

@observer
export class Cards extends React.Component<any, any> {
  dataData: any[];
  state = {
    isLoading: true,
    modalActive: false,
    setModalActive: false,
    oldPrice: [],
  }

  componentDidMount() {
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
  }

  private async loadData () {
    this.dataData = await new PostData().doFetchData(storeCoins.FetchUrl) ;
    storeCoins.setData(this.dataData);
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
            ? <LoaderSpinner/>
            : <CardsList data={this.dataData}  />
        }
      </div>
    )
  }
}
