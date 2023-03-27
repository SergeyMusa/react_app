import {CardsListItem} from "./CardsListItem";
import React from "react";
import './CardsList.css';
import {Grid} from "@mui/material";
import {Modal} from "../Modal/Modal";
import {Toggle} from "../../store/Toggle";
import {observer} from "mobx-react";
import {storeCoins} from "../../store/StoreCoins";
import {string} from "prop-types";

@observer
export class CardsList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            toggle: new Toggle(false),
            modalMessage: string,
        }
    }

    elements = () => {
        // console.log('CardsList_one', this.props.data)
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;

            return (
                <CardsListItem key={id} {...itemProps} press={this.modalOpen} />
            )
        })
    }

    onClickCoin = () => {
        console.log("onClickCoin");
    }

    modalOpen = (id: any) => {
        storeCoins.modalId = id;
        storeCoins.ModalData = JSON.parse(JSON.stringify(this.props.data));
        this.state.toggle.open();

        // const modalMessage = StoreCoins.ModalData.CoinInfo.FullName ;
        //   this.setState({modalMessage: modalMessage}) ;
    }

    render() {
        return (
            <>
                <Grid container
                      spacing={1}
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      mt={1}
                >
                    {this.elements()}
                </Grid>
                <Modal
                    modalTitle={'modalTitle'}
                    // modalMessage={'this.state.modalMessage'}
                    modalTimer={15}
                    isOpen={this.state.toggle.isOpen}
                    onClosed={this.state.toggle.close}
                    key={storeCoins.modalId}
                    id={storeCoins.modalId}
                    // modalObj={ StoreCoins.CoinsData }
                />
             </>
        )
    }
}
