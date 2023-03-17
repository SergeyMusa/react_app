import {CardsListItem} from "./CardsListItem";
import React from "react";
import './CardsList.css';
import {Grid} from "@mui/material";
import {Modal} from "../Modal/Modal";
import {Toggle} from "../../store/Toggle";
import {observer} from "mobx-react";

@observer
export class CardsList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            toggle: new Toggle(false),
        }
    }

    elements = () => {
        console.log('CardsList', this.props.data)
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;
            return (
                <CardsListItem key={id} {...itemProps} />
            )
        })
    }

    onClickCoin = () => {
        console.log("onClickCoin");
    }

    modalOpen = () => { //event
        // console.log('event', event.target);
        this.state.toggle.open();
        console.log('2>>>>', this.state.toggle.isOpen);
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
                      onClick={this.modalOpen}
                >
                    {this.elements()}
                </Grid>
                <Modal
                    modalTitle={'modalTitle'}
                    modalMessage={'modalMessage'}
                    modalTimer={15}
                    isOpen={this.state.toggle.isOpen}
                    onClosed={this.state.toggle.close}
                    // modalObj={this.dataData}
                />
            </>
        )
    }
}
