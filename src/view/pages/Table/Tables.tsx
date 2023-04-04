import React from "react"; //, {Component}
import {TablesList} from "./TablesList";
import {observer} from "mobx-react";
import {storeCoins} from "_store/StoreCoins";
import {storeTimer} from "_store/StoreTimer";
import Search from "_common/utils/Search";
import {LoaderSpinner} from "_common/utils/LoaderSpiner/LoaderSpiner";
import {doFetchData} from "_common/utils/PostData";

@observer
export class Tables extends React.Component<any, any> { //propsDataCryptaFromPostData
  dataData: any[];
  state = {
    isLoading: true, //  storeCoins.IsLoading: boolean = true
  }

  componentDidMount() {
    storeTimer.setTimerBeginTime(15);
    storeTimer.setTimerFunction(this.startTimer);
    this.startTimer();
  }

  startTimer = () => {
    storeTimer.doVisible();
    storeTimer.doStart();

    this.loadData().then(() => { // ??? refactor late twix code
      this.setState({isLoading: false});
    });
  }

  public async loadData() {
    this.dataData = await doFetchData(storeCoins.FetchUrl);
    console.log('load_data...');
    // console.log(this.dataData);
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
