import React from "react";
import './Cards.css';
import {CardsList} from "./CardsList";
import {storeTimer} from "../../store/StoreTimer";
import {storeCoins} from "../../store/StoreCoins";
import {PostData} from "../../utils/PostData";
import Search from "../../utils/Search";
import LoaderSpiner from "../../utils/LoaderSpiner/LoaderSpiner";
import {observer} from "mobx-react";

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
            ? <LoaderSpiner/>
            : <CardsList data={this.dataData}  />
        }
      </div>
    )
  }
}
