import React, {useState} from "react"; //, {Component}
import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {EmployersList} from "./EmployersList";
import Search from "../../store/Search";
import Store from "../../store/Store";
import StoreCoins from "../../store/StoreCoins";
import {styled} from "@mui/material/styles";
import {Modal} from "../Modal/Modal";

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


export class Cards extends React.Component {
    dataData: any[];
    state = {
        isLoading: true,
        modalActive: true,
        setModalActive: true,
        // dataCoinInfo: {},
        // store: new StoreCoins(),
    }
    // componentDidMount() {
    //     this.loadData() }

    async componentDidMount() { //loadData
        // setInterval(this.loadData, Store.timeUpdate); //30000
        // setInterval( Store.timeUpdate); //30000
        console.log('timeUpdate', Store.timeUpdate);
        try {
                //         fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
            const response = await fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
            const data = await response.json()
            this.dataData = data.Data;
            console.log('dataData', this.dataData)
            StoreCoins.CoinsTemp = this.dataData;
            console.log('StoreCoins', StoreCoins.CoinsTemp)
            // this.state.store.
            // StoreCoins.show();
                this.setState({
                isLoading: false,
                // data,
                })
            console.log('load_api');
        } catch (e) {
            console.log(e);
        }
    }
    setModalActiveF () {
        // this.setState({counter4: (this.state.counter4 - 1)});
        console.log(this.state.setModalActive);
        // this.setState({setModalActive: true});
        console.log(this.state.setModalActive);
    }

    render() {
        // const [ modalActive ] = useState(true); //, setModalActive
        console.log('>>>>', this.state.modalActive ,this.state.setModalActive);
        return (
            <div className="cards">
                {/*<Container>*/}
                    {/*<EmployersList keyX={1} dataX={dataData}/>*/}
                <h3>Cards</h3>
                    <button onClick={() => this.componentDidMount()}> LOAD </button>
                    <Search />

                    {
                        this.state.isLoading
                            ? <Loader/>
                            // : <Tab data={this.state.dataData} />
                            : <EmployersList data={this.dataData}/>
                    }
                {/*</Container>*/}
            <button className='open-btn' onClick={this.setModalActiveF}>Open Modal</button>
                {/*<Modal message={'modal_message'} modalTimer={15} active={modalActive} setActive={setModalActive} />*/}
                {/* setActiv={()=>{1} activ={true}  */}
                    <p><span>2 Lorem ipsum dolor sit amuam temporibus veritatis vero voluptas voluptatem. Veritatis, voluptatem.</span>
                    <span>22 Beatae dolores ipsa natus odio possimus quo sunt tempore vel veniam, voluptatibus! Aliquid , enim error voluptate.</span>
                    <span>222 Aliquam aut cumque dicta eaque id nemo neque omnis quae soluta suscipit! harum quod veniam voluptatem!</span></p>
                <Modal message={'modal_message'} modalTimer={15} active={this.state.modalActive} setActive={this.state.setModalActive} />
            {/*  setActive={setModalActive}   */}

            </div>
        )
    }

}
    // {/*: <CryptoCard data={this.state.dataData}/>*/}
