import React from "react"; //, {Component}
// import './Cards.css';
import Loader from "../../store/Loader/Loader";
import Search from "../../store/Search";
import {storeTimer} from "../../store/StoreTimer";
import {storeCoins} from "../../store/StoreCoins";
import {Tab} from "./Tab";
import {PostData} from "../../store/PostData";

// import {inputTimer, propsDataCryptaFromPostData} from "../../store/type";

export class Tables extends React.Component<any, any> { //propsDataCryptaFromPostData
  dataData: any[];
  state = {
    isLoading: true,
  }

  componentDidMount() {
    console.log('Cards_componentDidMount');

    storeTimer.setTimerBeginTime(15);
    storeTimer.setTimerFunction(() => new Tables(storeCoins.FetchUrl).startTimer());

    this.startTimer();
  }

  // componentDidUpdate(prevProps: Readonly<inputTimer>, prevState: Readonly<any>, snapshot?: any) {
  //     // console.log('Cards_componentDidUpdate');
  // }
  componentWillUnmount() {
    console.log('Cards_componentWillUnmount');
  }

  startTimer = () => {
    console.log('Cards_startTimer');
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
            ? <Loader/>
            : <Tab data={this.dataData}/>
        }
      </div>
    )
  }
}
