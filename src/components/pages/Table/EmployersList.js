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

// function EmployersList (data) { //({keyX, dataX})
export default data => (
    // let imageUrlOk = "https://www.cryptocompare.com/";//+this.imageUrl;
    <div className='EmployersList'>
{
    data.data.map(item => (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={"id: " + item.CoinInfo.Id}
                    // subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="190"
                    // width="50"
                    image={"https://www.cryptocompare.com/" + item.CoinInfo.ImageUrl}
                    alt={item.CoinInfo.Id}
                />
                {/*{item.CoinInfo.ImageUrl}*/}
                {/* //"/static/images/cards/paella.jpg"   */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        1 '{item.DISPLAY.USD.FROMSYMBOL}'({item.CoinInfo.Name}) = {item.RAW.USD.PRICE} <AttachMoney fontSize="medium" />
                    </Typography>
                </CardContent>
            </Card>

        {/*<ul className={"app-list"}>*/}
        {/*    <EmployersListItem*/}
        {/*        id={item.CoinInfo.Id}*/}
        {/*        cryName={item.CoinInfo.Name}*/}
        {/*        raw={item.RAW.USD.PRICE}*/}
        {/*        display={item.DISPLAY.USD.FROMSYMBOL}*/}
        {/*        imageUrl={item.CoinInfo.ImageUrl}*/}
        {/*        cryFullName={item.CoinInfo.FullName}*/}
        {/*        cryUrl={item.CoinInfo.Url}*/}
        {/*        // cryUrl={ dataX[keyX].CoinInfo.Url }*/}
        {/*        // cryNetHashesPerSecond={ cry.Data[keyX].CoinInfo.NetHashesPerSecond }*/}
        {/*    />*/}
        {/*</ul>*/}
        </div>
    ))
}
    </div>
)
    // }
        // );
    // return (
    //     <ul className={"app-list"}>
    //         <EmployersListItem
    //             id={ item.CoinInfo.Id }
    //             // id={ dataX[keyX].CoinInfo.Id }
    //             cryName={ item.CoinInfo.Name }
    //             raw={ item.RAW.USD.PRICE}
    //             display={ item.DISPLAY.USD.FROMSYMBOL}
    //             imageUrl={ item.CoinInfo.ImageUrl }
    //             cryFullName={ item.CoinInfo.FullName }
    //             cryUrl={ item.CoinInfo.Url }
    //             // cryUrl={ dataX[keyX].CoinInfo.Url }
    //             // cryNetHashesPerSecond={ cry.Data[keyX].CoinInfo.NetHashesPerSecond }
    //         />
    //     </ul>
    // )
// }
// export default EmployersList;
