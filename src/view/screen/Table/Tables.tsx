import React from "react"; //, {Component}
import {TablesList} from "./TablesList";
import {observer} from "mobx-react";
import {STORE_TIMER} from "_store/StoreTimer";
import {doFetchData} from "_common/utils/Fetch";
import {URL_COINS} from "_common/const/Const";
import Search from "_view/components/Search/Search";
import {LoaderSpinner} from "_view/components/LoaderSpiner/LoaderSpiner";

@observer
export class Tables extends React.Component<any, any> { //propsDataCryptaFromPostData
  dataData: any[];
  state = {
    isLoading: true, //  storeCoins.IsLoading: boolean = true
  }

  componentDidMount() {
    // STORE_TIMER.setTimerFunction(this.startTimer);
    this.startTimer();
  }

  startTimer = () => {
    // STORE_TIMER.start();
    this.loadData().then(() => { // ??? refactor late twix code
      this.setState({isLoading: false});
    });
  }

  public async loadData() {
    this.dataData = await doFetchData(URL_COINS);
  }

  render() {
    return (
      <div className="table">
        <h3>Tables</h3>
        <button onClick={() => this.startTimer()}> LOAD</button>
        <Search/>
        {
          this.state.isLoading
            ? <LoaderSpinner/>
            : <TablesList data={this.dataData}/>
        }
      </div>
    )
  }
}
