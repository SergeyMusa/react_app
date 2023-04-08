import React from "react";
import {observer} from "mobx-react";
import {Grid} from "@mui/material";
import {STORE_COINS} from "_store/StoreCoins";
import {Toggle} from "_common/utils/Toggle";
import {Modal} from "_view/components/Modal/Modal";
import {CardComponent} from "_view/screen/CardList/components/Card.component";
import {ResponseData} from "_common/dto/Type";
import {CardFull} from "./CardFull.component";
import {computed, observable} from "mobx";

interface Props {
  data: ResponseData[]
}

@observer
export class CardListContent extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  @observable private _currentCard: ResponseData;
  private toggle = new Toggle(false)

  @computed
  private get _elements() {
    return this.props.data?.map(item => {
      return (
        <CardComponent key={item.CoinInfo.Id} {...item} press={this.modalOpen}/>
      )
    })
  }

  private modalOpen = (id: string) => {
    this._currentCard = STORE_COINS.CoinsList.find(item => item.CoinInfo.Id === id)
    this.toggle.open();
  }

  render() {
    const {toggle} = this;

    return (
      <>
        <Grid container
              spacing={1}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              mt={1}
        >
          {this._elements}
        </Grid>
        <Modal title={'modalTitle'} isOpen={toggle.isOpen} onClosed={toggle.close}>
          <CardFull {...this._currentCard} />
        </Modal>
      </>
    )
  }
}
