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
import ErrorBoundary from "_common/errors/ErrorBoundary";

@observer
export class CardListScreen extends React.Component {
  private _init = true;
  private _isBusy = STORE_TIMER._isBusy ;

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    STORE_TIMER.start();
    this._init = false;

  }

  public render() {
    return (
      <div className="cards">
        <h3>Cards</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>

        <ErrorBoundary>
          <Search props={"xxx"}/>
        </ErrorBoundary>

        {
          STORE_TIMER.changeIsBusy && this._init
            ? <LoaderSpinner/>
            : <ErrorBoundary> <CardListContent data={STORE_COINS.CoinsList}/> </ErrorBoundary>
        }
      </div>
    )
  }
}
