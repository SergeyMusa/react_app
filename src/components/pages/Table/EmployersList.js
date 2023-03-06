import {EmployersListItem} from "./EmployersListItem";
import React from "react";
import styles from './EmployersList.css';
import Search from "../../store/Search";

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

// export function EmployersList<data>() {
const EmployersList = (data) => {
// export class EmployersList extends React.Component {
//     constructor(data) {
//         super(data);
//     }

    // let imageUrlOk = "https://www.cryptocompare.com/";//+this.imageUrl;

    const elements = data.data.map(item => {
        const {id=item.CoinInfo.Id, ...itemProps} = item;
        // console.log('id',id)
        return (
            <div>
                <EmployersListItem key={id} { ...itemProps } />
                {/*//iteration: false*/}
            </div>
        )
    })
    // public render () {
    return (
        <div className={"app-list"}>
            <Search />
            {elements}
        </div>
    )
    // }
}
export default EmployersList;