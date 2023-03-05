import React from "react"; //, {Component}
// import styles from '.src/styles/Table.css';
// import {render} from "react-dom";
import Loader from "../../store/Loader/Loader";
import Tab from "../..//store/Loader/Tab";
import {CryptoCard} from "../../store/CryptoCard";
import EmployersListItem from "./EmployersListItem";

let dataData = [];

// export default props => {
//     const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
//     return (
//         <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
//             <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
//             <button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
//         </div>
//     )
// }
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

function EmployersList ({keyX}) {
    console.log('key', keyX, typeof(keyX))
    // console.log('Table.dataData', Table.dataData, typeof(Table.dataData))
    // console.log('Table.data.Data', Table.data.Data)
    // console.log('dataData[keyX]', Table.dataData[keyX] )
    return (
        <ul className={"app-list"}>
            <EmployersListItem
                id={ cry.Data[keyX].CoinInfo.Id }
                cryName={ cry.Data[keyX].CoinInfo.Name }
                raw={cry.Data[keyX].RAW.USD.PRICE}
                display={cry.Data[keyX].DISPLAY.USD.FROMSYMBOL}
                imageUrl={ cry.Data[keyX].CoinInfo.ImageUrl }
                cryFullName={ cry.Data[keyX].CoinInfo.FullName }
                cryUrl={ cry.Data[keyX].CoinInfo.Url }
                cryNetHashesPerSecond={ cry.Data[keyX].CoinInfo.NetHashesPerSecond }
            />
            {/*<EmployersListItem name='Piter' salary={700}/>*/}
        </ul>
    )
}
export default EmployersList;


// function WhoIsWho ({name, surn}) { //(props) //props.name\/
//     return (
//     <div>
//         <h1>my name is {name.fname} of the {surn}</h1>
//     </div>
//     )
// }


export class Table extends React.Component {
    state = {
        isLoading: true,
        data: [],
        dataData:[],
        dataCoinInfo: {},
    }

    async componentDidMount() {
// export default class Table extends React.Component{ //< tableProps >
//         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
//         const response = await fetch(` http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
        const data = await response.json()

        dataData = data.Data;
        console.log('dataData',dataData)
        const dataData1 = data.Data.forEach((value, index) => {
            console.log('2', value, index);
        });
        console.log('1',dataData1);

        this.setState({
            isLoading: false,
            data,
            // dataData,
        })

        // console.log('cry.Data',cry.Data);
        // console.log('data.Data',data.Data);
        // console.log('cry.Data-id-1',data.Data[1].CoinInfo.Id, data.Data[1].CoinInfo.Name);
    }

    render() {
        return (
            <div className="container">
                <EmployersList keyX={+0}/>
                <EmployersList keyX={1}/>

                {/*<WhoIsWho name={{fname:'Vova'}} surn='Pupkin'/>*/}
                {/*<WhoIsWho name={{fname:'Serg'}} surn='Musa'/>*/}

                <CryptoCard props={'test'}/>
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <Tab
                            data={this.state.dataData}
                        />
                }

            </div>
        )
    }
}


