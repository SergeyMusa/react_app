import React from "react";
import {observer} from "mobx-react";
import {STORE_COINS} from "_store/StoreCoins";
import {STORE_TIMER} from "_store/StoreTimer";
import {CardListContent} from "_view/screen/CardList/components/CardListContent.component";
import {LoaderSpinner} from "_view/components/LoaderSpiner/LoaderSpiner";
import Search from "_view/components/Search/Search";
import ErrorBoundary from "_common/errors/ErrorBoundary";

@observer
export class CardListScreen extends React.Component {
  // private _init = true;

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    // this._init = false;
    STORE_TIMER.start();
  }

  public render() {
    return (
      <div className="cards">
        <ErrorBoundary>
          <Search props={"xxx"}/>
        </ErrorBoundary>
        {
          STORE_COINS.changeIsBusy
            ? <LoaderSpinner/>
            : <CardListContent data={STORE_COINS.CoinsList}/>
        }
      </div>
    )
  }
}
