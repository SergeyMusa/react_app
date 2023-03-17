import React from "react"; //, {Component}
import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {CardsList} from "./CardsList";
import Search from "../../store/Search";
// import StoreCoins from "../../store/StoreCoins";
import {MyModal} from "../Modal/MyModal";
import {PostData} from "../../store/PostData";
import CustomizedDialogs from "../Modal/Modal";

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
        modalActive: false,
        setModalActive: false,
        FetchUrl: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`,
    }
    componentDidMount() {
        this.loadData().then(() => { // ??? refactor late twix code
            this.setState({ isLoading: false }) ; // !!! DONT WORK
            this.state.isLoading = false ;
        } );    }
    async loadData () {
        this.dataData = await new PostData().doFetchData(this.state.FetchUrl) ;
        // new timer4().startTimer();
        // !!! add timer load
    }

     private setModalActiveF = () => {
         console.log('setModalActiveF 1', this.state.setModalActive);
        this.setState({setModalActive: true});
         console.log('setModalActiveF 2', this.state.setModalActive);
    }

    public render() {
        // const [ modalActive ] = useState(true); //, setModalActive
        // const {modalActive, setModalActive} = this.state; //, setModalActive
         // [isLoading] = this.state; //, setModalActive
        // ??? HOW up work
        // console.log('>>>>', this.state.modalActive, this.state.setModalActive);

        return (
            <div className="cards">
                <h3>Cards</h3>
                <button onClick={() => this.componentDidMount()}>[ LOAD ]</button>
                <Search/>
                <CustomizedDialogs modalTitle={'modalTitle'}
                                   modalMessage={'modalMessage'}
                                   modalTimer={15}
                                   modalObj={this.dataData}
                                   // zzz={<CardsList data={this.dataData}//>}
                />
                {
                    this.state.isLoading
                        ? <Loader/>
                        : <CardsList data={this.dataData}/>
                }
                {/*<div className="modalka">*/}
                {/*    <button className='open-btn' onClick={this.setModalActiveF}>Open Modal</button>*/}
                {/*    /!*<MyModal message={'modal_message'} modalTimer={15} active={modalActive} setActive={setModalActive} />*!/*/}
                {/*    /!* setActiv={()=>{1} activ={true}  *!/*/}
                {/*    <p><span>2 Lorem ipsum dolor sit amuam temporibus veritatis vero voluptas voluptatem. Veritatis, voluptatem.</span>*/}
                {/*        <span>22 Beatae dolores ipsa natus odio possimus quo sunt tempore vel veniam, voluptatibus! Aliquid , enim error voluptate.</span>*/}
                {/*        <span>222 Aliquam aut cumque dicta eaque id nemo neque omnis quae soluta suscipit! harum quod veniam voluptatem!</span>*/}
                {/*    </p>*/}
                {/*    <MyModal message={'modal_message'} modalTimer={15} active={this.state.modalActive} setActive={this.state.setModalActive}/>*/}
                {/*    /!*  setActive={setModalActive}   *!/*/}
                {/*</div>*/}

            </div>
        )
    }

}

// {/*: <CryptoCard data={this.state.dataData}/>*/}
