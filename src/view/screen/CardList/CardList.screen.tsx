import React from "react";
import {observer} from "mobx-react";
import {STORE_COINS} from "_store/StoreCoins";
import {STORE_TIMER} from "_store/StoreTimer";
import {doFetchData} from "_common/utils/Fetch";
import {URL_COINS} from "_common/const/Const";
import {Toggle} from "_common/utils/Toggle";
import {CardListContent} from "_view/screen/CardList/components/CardListContent.component";
import {LoaderSpinner} from "_view/components/LoaderSpiner/LoaderSpiner";
import Search from "_view/components/Search/Search";

@observer
export class CardListScreen extends React.Component {
  private _isBusy = new Toggle(false)
  private _init = true;

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    STORE_TIMER.start();
    this.loadData().then(() => {
      this.setState({isLoading: false});
    });
  }

  private async loadData() {
    this._isBusy.open()
    try {
      const data = await doFetchData(URL_COINS);
      STORE_COINS.setData(data);
    } finally {
      this._isBusy.close()
      this._init = false;
    }
  }

  public render() {
    return (
      <div className="cards">
        <h3>Cards</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>
        <Search props={"xxx"}/>
        {
          this._isBusy.isOpen && this._init
            ? <LoaderSpinner/>
            : <CardListContent data={STORE_COINS.CoinsList}/>
        }
      </div>
    )
  }
}
