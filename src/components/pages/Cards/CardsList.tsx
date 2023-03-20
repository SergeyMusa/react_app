import {CardsListItem} from "./CardsListItem";
import React from "react";
import './CardsList.css';
import {Grid} from "@mui/material";
import {Modal} from "../Modal/Modal";
import {Toggle} from "../../store/Toggle";
import {observer} from "mobx-react";
import { CardsListItemFull } from "./CardsListItemFull";

@observer
export class CardsList extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            toggle: new Toggle(false),
        }
    }

    elements = () => {
        console.log('CardsList_one', this.props.data)
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;
            return (
                <CardsListItem key={id} {...itemProps} press={this.modalOpen} />
            )
        })
    }

    elementsFull = (event) => {

    }

    onClickCoin = () => {
        console.log("onClickCoin");
    }

    modalOpen = (id: any) => { //
        console.log('event', id);
        // !!! find
        this.state.toggle.open();

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
                    {/*{this.elementsFull()}*/}
                <Modal
                    modalTitle={'modalTitle'}
                    modalMessage={'modalMessage'}
                    modalTimer={15}
                    isOpen={this.state.toggle.isOpen}
                    onClosed={this.state.toggle.close}
                    // key={id}
                    // modalObj={itemProps}
                />
                    {/*<CardsListItemFull />*/}
                    {/*  !!! >>>>>>>>>>>>>>>>>>>>  */}
                {/*</Modal>*/}

            </>
        )
    }
}