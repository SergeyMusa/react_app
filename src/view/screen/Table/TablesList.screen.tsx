import React from "react"; //, {Component}
import {observer} from "mobx-react";
import {STORE_TIMER} from "_store/StoreTimer";
import {doFetchData} from "_common/utils/Fetch";
import {URL_COINS} from "_common/const/Const";
import Search from "_view/components/Search/Search";
import {LoaderSpinner} from "_view/components/LoaderSpiner/LoaderSpiner";
import {TablesComponent} from "_view/screen/Table/components/Tables.component";
import {Toggle} from "_common/utils/Toggle";
import {STORE_COINS} from "_store/StoreCoins";

@observer
export class TablesListScreen extends React.Component<any, any> { //propsDataCryptaFromPostData
  private _isBusy = new Toggle(false)
  private _init = true;
  // dataData: any[];
  // state = {
  //   isLoading: true, //  storeCoins.IsLoading: boolean = true
  // }

  componentDidMount() {
    // STORE_TIMER.setTimerFunction(this.startTimer);
    this.startTimer();
  }

  startTimer = () => {
    STORE_TIMER.start();
    this.loadData().then(() => {
      this.setState({isLoading: false});
    });
  }

  public async loadData() {
    this._isBusy.open()
    try {
      const data = await doFetchData(URL_COINS);
      STORE_COINS.setData(data);
    } finally {
      this._isBusy.close()
      this._init = false;
    }
    // this.dataData = await doFetchData(URL_COINS);
  }

  public render() {
    return (
      <div className="table">
        <h3>Tables</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>
        <Search/>
        {
          this._isBusy.isOpen && this._init
            ? <LoaderSpinner/>
            : <TablesComponent />
        }
      </div>
    )
  }
}
