import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {observer} from "mobx-react";
import {STORE_COINS} from "_store/StoreCoins";
import {Modal} from "_view/components/Modal/Modal";
import {Toggle} from "_common/utils/Toggle";
import {ResponseData} from "_common/dto/Type";
import {observable} from "mobx";
import {CardFull} from "_view/screen/CardList/components/CardFull.component";

@observer
export class TablesComponent extends React.Component {
  @observable private initPrice?: number;
  @observable private _data: any = STORE_COINS.CoinsList;
  @observable private _currentCard: ResponseData;
  private toggle = new Toggle(false)

  modalOpen (row: any) {
    this._currentCard = row;
    this.toggle.open();
    console.log('row', row);
  }

  render() {
    const {toggle} = this;
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">№</TableCell>
                <TableCell>Crypto</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Img</TableCell>
                <TableCell align="right">PRICE</TableCell>
                <TableCell align="right">SYMBOL</TableCell>
                <TableCell align="right">HashPerSec</TableCell>
                <TableCell align="right">FullName&nbsp;()</TableCell>
                <TableCell align="right">MKTCAP</TableCell>
                <TableCell align="right">TotalVol24</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{rows.map((row) => (*/}
              {this._data?.map( (row, index) => {
                const id = row.CoinInfo.Id;
                const image = `https://www.cryptocompare.com/${row.CoinInfo?.ImageUrl}` ;
                const props = row.RAW.USD.PRICE;
                return (
                <TableRow
                  key={id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  onClick={() => this.modalOpen(row)}
                >
                  <TableCell align="right">{index+1}</TableCell>
                  <TableCell component="th" scope="row">{row.CoinInfo.Name}</TableCell>
                  <TableCell align="right" sx={{backgroundColor: this.getColor(props)}}>{row.CoinInfo.Id}</TableCell>
                  <TableCell align="right">
                    <picture>
                      <source srcSet={image}
                              width = '30px' height ='30px'
                      />
                      <img src={image} alt="img"/>
                    </picture>
                  </TableCell>
                  <TableCell align="right">{row.RAW.USD.PRICE}</TableCell>
                  <TableCell align="right">{row.DISPLAY.USD.FROMSYMBOL}</TableCell>
                  <TableCell align="right">{row.CoinInfo.NetHashesPerSecond}</TableCell>
                  <TableCell align="right">{row.CoinInfo.FullName}</TableCell>
                  <TableCell align="right">{row.DISPLAY.USD.MKTCAP}</TableCell>
                  <TableCell align="right">{row.DISPLAY.USD.TOTALVOLUME24HTO}</TableCell>
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal title={'modalTitle'} isOpen={toggle.isOpen} onClosed={toggle.close}>
          <CardFull {...this._currentCard} />
      </Modal>
      </>
    );
  }
  private getColor(props) {
    const price = props;
    let color: string

    if (!this.initPrice) {
      color = 'white'
    } else if (this.initPrice && price > this.initPrice) {
      color = 'green'
    } else if (this.initPrice && price < this.initPrice) {
      color = 'red'
    }

    this.initPrice = price;
    return color
  }
}