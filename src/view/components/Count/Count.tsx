import {observer} from "mobx-react";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {STORE_COINS} from "_store/StoreCoins";
import {string} from "prop-types";


@observer
export default class Count extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      coinsCount: '20'
    };
  }
  //
  // componentDidMount() {
  //   console.log('COUNT', this.state.coinsCount);
  //   STORE_COINS.setCoinsCount(this.state.coinsCount);
  // }

  handleChange = (event: SelectChangeEvent) => {
      this.setState({coinsCount: event.target.value}) ;
    console.log('coinsCount_1',this.state.coinsCount)
    STORE_COINS.setCoinsCount(this.state.coinsCount);
    console.log('coinsCount_2',STORE_COINS.coinsCountd)
  };

  render() {
    return (
      <div>
        <FormControl sx={{m: 1, minWidth: 80}} size="small">
          <InputLabel id="select-autowidth-label">count</InputLabel>
          <Select
            labelId="select-autowidth-label"
            id="select-autowidth"
            value={this.state.coinsCount}
            onChange={this.handleChange}
            autoWidth
            label="count"
          >
            <MenuItem value="">
              {/*<em>20.. Twenty</em>*/}
            </MenuItem>
            <MenuItem value={10}>10.. Ten</MenuItem>
            <MenuItem value={20}>20.. Twenty</MenuItem>
            <MenuItem value={50}>50.. Fifty</MenuItem>
            <MenuItem value={99}>99.. Maximum</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}