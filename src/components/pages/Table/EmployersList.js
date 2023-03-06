import EmployersListItem from "./EmployersListItem";
import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {AttachMoney} from "@mui/icons-material";
import Card from "@mui/material/Card";
import styles from './EmployersList.css';

// const cry = {       // { a,b,c, Data[ { {CoinInfo:{}, RAW:{USD{}}, DISPLAY:{USD{}} },.. {} ] }
//     Message: "Success",
//     Type: 100,
//     MetaData: {
//         Count: 3314
//     },
//     SponsoredData: [ ],
//     Data: [
//         {
//             CoinInfo: {
//                 Id: "1182",
//                 Name: "BTC",
//                 FullName: "Bitcoin",
//                 ImageUrl: "/media/37746251/btc.png",
//                 // https://www.cryptocompare.com/media/37746251/btc.png?width=200
//                 Url: "/coins/btc/overview",
//                 Algorithm: "SHA-256",
//                 Rating: {
//                     Weiss: {
//                         Rating: "B+",
//                         TechnologyAdoptionRating: "A-",
//                         MarketPerformanceRating: "D"
//                     }
//                 },
//                 NetHashesPerSecond: 329239491201069800000,
//             },
//             RAW: {
//                 USD: {
//                     PRICE: 22434.72,
//                 }
//             },
//             DISPLAY: {
//                 USD: {
//                     FROMSYMBOL: "Ƀ",
//                 }
//             },
//         },
//         {
//             CoinInfo: {
//                 Id: "7605",
//                 Name: "ETH",
//                 FullName: "Ethereum",
//                 ImageUrl: "/media/37746238/eth.png",
//                 Url: "/coins/eth/overview",
//                 Algorithm: "Ethash",
//                 NetHashesPerSecond: 0,
//             },
//             RAW: {
//                 USD: {
//                     PRICE: "$ 1,570.55",
//                 }
//             },
//             DISPLAY: {
//                 USD: {
//                     FROMSYMBOL: "Ξ",
//                 }
//             }
//         }
//     ]
// }


// export class EmployersList<data> extends React.Component {
// export function EmployersList<data>() {
const EmployersList = (data) => {
    // let imageUrlOk = "https://www.cryptocompare.com/";//+this.imageUrl;

    const elements = data.data.map(item => {
      return (
          <EmployersListItem { ...item } /> //iteration: false
      )
    })
  // public render () {
    return (
            <ul className={"app-list"}>
                {elements}
            </ul>
    )
  // }
}
export default EmployersList;
