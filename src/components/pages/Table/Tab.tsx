import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export class Tab extends React.Component<any, any> {
// export default function BasicTable() {
    render() {
        return (
          <TableContainer component={Paper}>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell>CryptoCompare</TableCell>
                          <TableCell align="right">PRICE</TableCell>
                          <TableCell align="right">SYMBOL</TableCell>
                          <TableCell align="right">NetHashesPerSecond</TableCell>
                          <TableCell align="right">FullName&nbsp;()</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {/*{rows.map((row) => (*/}
                      {this.props.data?.map(row => (
                        <TableRow
                          key={row.CoinInfo.Id}
                          sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.CoinInfo.Name}
                            </TableCell>
                            <TableCell align="right">{row.RAW.USD.PRICE}</TableCell>
                            <TableCell align="right">{row.DISPLAY.USD.FROMSYMBOL}</TableCell>
                            <TableCell align="right">{row.CoinInfo.NetHashesPerSecond}</TableCell>
                            <TableCell align="right">{row.CoinInfo.FullName}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
        );
    }
}