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
export class TablesListScreen extends React.Component<any, any> {
  private _isBusy = STORE_TIMER._isBusy ;//new Toggle(false)
  // private _init = STORE_TIMER._init ;
  private _init = true ;

  componentDidMount() {
    this.startTimer();
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    // console.log('_init',this._init)
    // this._init = false;
  }

  startTimer = () => {
    STORE_TIMER.start();
    this._init = false;
    this.loadData().then(() => {
      this.setState({isLoading: false});
    });
  }

  public async loadData() {
  //   this._isBusy.open()
  //   try {
  //     const data = await doFetchData(URL_COINS);
  //     STORE_COINS.setData(data);
  //   } finally {
  //     this._isBusy.close()
  //     this._init = false;
  //   }
  }

  public render() {
    console.log('STORE_TIMER.changeIsBusy', STORE_TIMER.changeIsBusy)
    return (
      <div className="table">
        <h3>Tables</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>
        <Search/>
        {
          // this._isBusy.isOpen && this._init
          STORE_TIMER.changeIsBusy && this._init
            ? <LoaderSpinner/>
            : <TablesComponent />
        }
      </div>
    )
  }
}
