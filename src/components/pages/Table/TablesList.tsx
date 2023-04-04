import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {storeCoins} from "../../store/StoreCoins";
import {Modal} from "../Modal/Modal";
import {Toggle} from "../../utils/Toggle";

export class TablesList extends React.Component<any, any> {
  state = {
    toggle: new Toggle(false),
  }

  modalOpen = (id, row ) => { //
    console.log("MODALKA", '_id_', id, '_row_', row);

    // storeCoins.setId(id) ;
    // console.log("MODALKA-1 id ", storeCoins.modalId)
    // // storeCoins.ModalData = JSON.parse(JSON.stringify(this.props.data));
    // storeCoins.setData(row);
    // console.log("MODALKA ModalData ", storeCoins.ModalData)
    // this.state.toggle.open();
  }

  render() {
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>CryptoCompare</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">PRICE</TableCell>
                <TableCell align="right">SYMBOL</TableCell>
                <TableCell align="right">NetHashesPerSecond</TableCell>
                <TableCell align="right">FullName&nbsp;()</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{rows.map((row) => (*/}
              {this.props.data?.map(row => {
                const {id = row.CoinInfo.Id} = row
                return (
                <TableRow
                  key={id}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                  onClick={() => this.modalOpen(id, {...row}) } //
                  // onClick={()=>this.props.onClick(row.CoinInfo.Id)}
                >
                  <TableCell component="th" scope="row">{row.CoinInfo.Name}</TableCell>
                  <TableCell align="right">{row.CoinInfo.Id}</TableCell>
                  <TableCell align="right">{row.RAW.USD.PRICE}</TableCell>
                  <TableCell align="right">{row.DISPLAY.USD.FROMSYMBOL}</TableCell>
                  <TableCell align="right">{row.CoinInfo.NetHashesPerSecond}</TableCell>
                  <TableCell align="right">{row.CoinInfo.FullName}</TableCell>
                </TableRow>
              )})}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          modalTitle={'modalTitle'}
          // modalMessage={'this.state.modalMessage'}
          modalTimer={15}
          isOpen={this.state.toggle.isOpen}
          onClosed={this.state.toggle.close}
          key={storeCoins.modalId}
          id={storeCoins.modalId}
        />
      </>
    );
  }
}