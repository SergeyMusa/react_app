import {observer} from "mobx-react";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {STORE_COINS} from "_store/StoreCoins";
import {computed} from "mobx";


@observer
export default class CountLoadCoins extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      coinsCount: '2'
    };
  }
  @computed
  public setCoinsCount() {
    this.setState({coinsCount:  '30'}) ;
  }

  handleChange = (event: SelectChangeEvent) => {
    this.setState({coinsCount: event.target.value}) ;
    STORE_COINS.setCoinsCount(event.target.value);
    // STORE_TIMER.start();// ??? check it
  };

  render() {

    return (
      <>
        <FormControl sx={{m: 1, minWidth:100}} size="small">
          <InputLabel id="select-autowidth-label">count</InputLabel>
          <Select
            labelId="select-autowidth-label"
            id="select-autowidth"
            value={STORE_COINS.coinsCount}
            onChange={this.handleChange}
            autoWidth
            label="count"
          >
            <MenuItem value={10}>10.. Ten</MenuItem>
            <MenuItem value={20}>20.. Twenty</MenuItem>
            <MenuItem value={30}>30.. Thirty</MenuItem>
            {/*<MenuItem value={99}>99.. Maximum</MenuItem>*/}
          </Select>
        </FormControl>
      </>
    );
  }
}