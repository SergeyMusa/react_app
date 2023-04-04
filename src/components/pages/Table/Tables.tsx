import React from "react"; //, {Component}
import {storeTimer} from "../../store/StoreTimer";
import {storeCoins} from "../../store/StoreCoins";
import {TablesList} from "./TablesList";
import {PostData} from "../../utils/PostData";
import Search from "../../utils/Search";
import LoaderSpiner from "../../utils/LoaderSpiner/LoaderSpiner";
import {observer} from "mobx-react";

@observer
export class Tables extends React.Component<any, any> { //propsDataCryptaFromPostData
  dataData: any[];
  state = {
    isLoading: true, //  storeCoins.IsLoading: boolean = true
  }

  componentDidMount() {
    storeTimer.setTimerBeginTime(15);
    storeTimer.setTimerFunction(() => new Tables(storeCoins.FetchUrl).startTimer());
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
    this.dataData = await new PostData().doFetchData(storeCoins.FetchUrl);
    console.log('load_data...');
  }

  render() {
    return (
      <div className="table">
        <h3>Tables</h3>
        <button onClick={() => this.startTimer()}> LOAD</button>
        <Search/>
        {
          this.state.isLoading
            ? <LoaderSpiner/>
            : <TablesList data={this.dataData}/>
        }
      </div>
    )
  }
}
