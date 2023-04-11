import React from "react";
import {observer} from "mobx-react";
import {STORE_TIMER} from "_store/StoreTimer";
import Search from "_view/components/Search/Search";
import {LoaderSpinner} from "_view/components/LoaderSpiner/LoaderSpiner";
import {TablesComponent} from "_view/screen/Table/components/Tables.component";

@observer
export class TablesListScreen extends React.Component {
  private _init = true ;

  componentDidMount() {
    this.startTimer();
  }

  startTimer = () => {
    STORE_TIMER.start();
    this._init = false;
  }

  public render() {
    return (
      <div className="table">
        <h3>Tables</h3>
        <button onClick={() => this.startTimer()}>[ LOAD ]</button>
        <Search/>
        {
          STORE_TIMER.changeIsBusy && this._init
            ? <LoaderSpinner/>
            : <TablesComponent />
        }
      </div>
    )
  }
}
