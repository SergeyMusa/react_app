import EmployersListItem from "./EmployersListItem";
import React from "react";

const cry = {       // { a,b,c, Data[ { {CoinInfo:{}, RAW:{USD{}}, DISPLAY:{USD{}} },.. {} ] }
    Message: "Success",
    Type: 100,
    MetaData: {
        Count: 3314
    },
    SponsoredData: [ ],
    Data: [
        {
            CoinInfo: {
                Id: "1182",
                Name: "BTC",
                FullName: "Bitcoin",
                ImageUrl: "/media/37746251/btc.png",
                // https://www.cryptocompare.com/media/37746251/btc.png?width=200
                Url: "/coins/btc/overview",
                Algorithm: "SHA-256",
                Rating: {
                    Weiss: {
                        Rating: "B+",
                        TechnologyAdoptionRating: "A-",
                        MarketPerformanceRating: "D"
                    }
                },
                NetHashesPerSecond: 329239491201069800000,
            },
            RAW: {
                USD: {
                    PRICE: 22434.72,
                }
            },
            DISPLAY: {
                USD: {
                    FROMSYMBOL: "Ƀ",
                }
            },
        },
        {
            CoinInfo: {
                Id: "7605",
                Name: "ETH",
                FullName: "Ethereum",
                ImageUrl: "/media/37746238/eth.png",
                Url: "/coins/eth/overview",
                Algorithm: "Ethash",
                NetHashesPerSecond: 0,
            },
            RAW: {
                USD: {
                    PRICE: "$ 1,570.55",
                }
            },
            DISPLAY: {
                USD: {
                    FROMSYMBOL: "Ξ",
                }
            }
        }
    ]
}

function EmployersList ({keyX, dataX}) {
    console.log('key', keyX, typeof(keyX))

    // console.log('cry.Data', cry.Data)
    // console.log('cry.Data[0]', cry.Data[0])

    // console.log('dataX', dataX)
    // console.log('dataX[0]', dataX[0])
    console.log('dataX[keyX]', dataX[keyX] )
    return (
        <ul className={"app-list"}>
            <EmployersListItem
                id={ dataX[keyX].CoinInfo.Id }
                cryName={ dataX[keyX].CoinInfo.Name }
                raw={ dataX[keyX].RAW.USD.PRICE}
                display={ dataX[keyX].DISPLAY.USD.FROMSYMBOL}
                imageUrl={ dataX[keyX].CoinInfo.ImageUrl }
                cryFullName={ dataX[keyX].CoinInfo.FullName }
                cryUrl={ dataX[keyX].CoinInfo.Url }
                // cryNetHashesPerSecond={ cry.Data[keyX].CoinInfo.NetHashesPerSecond }
            />
            {/*<EmployersListItem name='Piter' salary={700}/>*/}
        </ul>
    )
}
export default EmployersList;
