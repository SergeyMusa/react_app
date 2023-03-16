import React from "react"; //, {Component}
import './Cards.css';
import Loader from "../../store/Loader/Loader";
import {CardsList} from "./CardsList";
import Search from "../../store/Search";
// import StoreCoins from "../../store/StoreCoins";
import {Modals} from "../Modal/Modals";
import {PostData} from "../../store/PostData";
import timer4 from "../../store/Timer4";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
            <div className="cards">
                <h3>Cards</h3>
                <button onClick={() => this.componentDidMount()}>[ LOAD ]</button>
                <Search/>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>

                {
                    this.state.isLoading
                        ? <Loader/>
                        : <CardsList data={this.dataData}/>
                }
                <div className="modalka">
                    <button className='open-btn' onClick={this.setModalActiveF}>Open Modal</button>
                    {/*<Modals message={'modal_message'} modalTimer={15} active={modalActive} setActive={setModalActive} />*/}
                    {/* setActiv={()=>{1} activ={true}  */}
                    <p><span>2 Lorem ipsum dolor sit amuam temporibus veritatis vero voluptas voluptatem. Veritatis, voluptatem.</span>
                        <span>22 Beatae dolores ipsa natus odio possimus quo sunt tempore vel veniam, voluptatibus! Aliquid , enim error voluptate.</span>
                        <span>222 Aliquam aut cumque dicta eaque id nemo neque omnis quae soluta suscipit! harum quod veniam voluptatem!</span>
                    </p>
                    <Modals message={'modal_message'} modalTimer={15} active={this.state.modalActive} setActive={this.state.setModalActive}/>
                    {/*  setActive={setModalActive}   */}
                </div>


            </div>
        )
    }

}

// {/*: <CryptoCard data={this.state.dataData}/>*/}
