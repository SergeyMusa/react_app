import React from "react";
import Grid from "@mui/material/Grid";
import {observer} from "mobx-react";
import {CardComponent, CardProps} from "_view/screen/CardList/components/Card.component";
import {STORE_TIMER} from "_store/StoreTimer";

@observer
export class CardFull extends React.Component<CardProps> {
  componentDidMount() {
    STORE_TIMER.stop();
  }

  componentWillUnmount() {
    STORE_TIMER.start();
  }

  render() {
    return (
      <Grid item xs>
        <CardComponent {...this.props} />
        <h3>Тута был БОБЕР!</h3>
      </Grid>
    )
  }
}
