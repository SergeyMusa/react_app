import React from "react";
import {observer} from "mobx-react";
import './CardsList.css';
import {Grid} from "@mui/material";
import {storeCoins} from "../../store/StoreCoins";
import {CardsListItem} from "./CardsListItem";
import {Modal} from "../Modal/Modal";
import {Toggle} from "../../utils/Toggle";

@observer
export class CardsList extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      toggle: new Toggle(false),
      // modalMessage: '',
    }
  }

  elements = () => {
    return this.props.data?.map(item => {
      const {id = item.CoinInfo.Id, ...itemProps} = item;

      return (
        <CardsListItem key={id} {...itemProps} press={this.modalOpen}/>
      )
    })
  }

  modalOpen = (id: any) => {
    // console.log('====id====', id)
    storeCoins.setId(id);
    storeCoins.setItemData( JSON.parse(JSON.stringify(this.props.data)) ) ;
    this.state.toggle.open();
  }

  render() {
    const {toggle} = this.state;
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
          isOpen={toggle.isOpen}
          onClosed={toggle.close}
          key={storeCoins.modalId}
          id={storeCoins.modalId}
        />
      </>
    )
  }
}
