import React from "react";
import {observer} from "mobx-react";
// import {Grid} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import {STORE_COINS} from "_store/StoreCoins";
import {Toggle} from "_common/utils/Toggle";
import {Modal} from "_view/components/Modal/Modal";
import {CardComponent} from "_view/screen/CardList/components/Card.component";
import {ResponseData} from "_common/dto/Type";
import {CardFull} from "./CardFull.component";
import {computed, observable} from "mobx";
import Button from "@mui/material/Button";
import {Forward10} from "@mui/icons-material";

interface Props {
  data: ResponseData[]
}

@observer
export class CardListContent extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  private coinsData: any = this.props.data; // ??? remake any

componentDidMount() {
    if (this.coinsData?.length <= 0) {
      console.log('!!!_props.data=', this.props.data);
      const data = require('/src/assets/json/plug.json');
      this.coinsData = data;
    }
}

  @observable private _currentCard: ResponseData;
  private toggle = new Toggle(false)

  @computed
  private get _elements() {
    // console.log('>>>>>',this.props.data)
    return this.coinsData.map(item => {
      return (
        <CardComponent key={item.CoinInfo.Id} {...item} press={this.modalOpen} />
      )
    })
  }

  private modalOpen = (id: string) => {
    this._currentCard = STORE_COINS.CoinsList.find(item => item.CoinInfo.Id === id)
    this.toggle.open();
  }

  // private loadNext () {
  //   console.log('disabled=',STORE_COINS.coinsLoadDisable)
  //   STORE_COINS.loadNextCoinsCount() ;
  // }

  render() {
    const {toggle} = this;
    // console.log('>>>', STORE_COINS.URL_COINSS)
    return (
      <>
        <Grid
          container
              spacing={1}
              alignItems="center"
              mt={1}
              margin={"1"}
              sx={{ justifyContent: 'space-around' }}
        >
          {this._elements}

        </Grid>
        <Modal title={'modalTitle'} isOpen={toggle.isOpen} onClosed={toggle.close}>
          <CardFull {...this._currentCard} />
        </Modal>
        {/*<Button onClick={() => this.loadNext()}*/}
        <Button onClick={() => STORE_COINS.loadNextCoinsCount()}
                disabled = {STORE_COINS.coinsLoadDisable}
                size={"medium"} variant="contained" sx={{marginTop:2}} >
          <Forward10 />
        </Button>

      </>
    )
  }
}
