import React from "react";
import {AttachMoney} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import {observer} from "mobx-react";
import {observable} from "mobx";
import {ResponseData} from "_common/dto/Type";

interface Props {
  press?(id: string): void
}

export type CardProps = ResponseData & Props

@observer
export class CardComponent extends React.Component<CardProps> {
  @observable private initPrice?: number;

  componentDidMount() {
    // Либо инициализируем цену и не меняем, либо меняем в getColor, тогда инициализировать не нужно
    this.initPrice = this.props?.RAW.USD.PRICE
  }

  render() {
    const {CoinInfo, DISPLAY, RAW} = this.props ;
    return (
      <Grid>
        <Card onClick={() => this.props.press(CoinInfo?.Id)}
              sx={{ width: 300, height: 330, margin: 1 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" sx={{backgroundColor: this.getColor}}>
                {DISPLAY?.USD.FROMSYMBOL}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
              </IconButton>
            }
            title={"id: " + CoinInfo?.Id}
          />
          <CardMedia
            component="img"
            sx={{height: 170, width: 170, margin: 'auto'}}
            height='180'
            image={"https://www.cryptocompare.com/" + CoinInfo?.ImageUrl}
            alt={CoinInfo?.Id}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom component="div">
              '{DISPLAY?.USD.FROMSYMBOL}'({CoinInfo?.Name}) = {RAW?.USD.PRICE}
              <AttachMoney fontSize="small" sx={{color: green[500]}}/>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  private get getColor() {
    const price = this.props.RAW?.USD.PRICE
    let color: string

    if (!this.initPrice) {
      color = 'white'
    } else if (this.initPrice && price > this.initPrice) {
      color = 'green'
    } else if (this.initPrice && price < this.initPrice) {
      color = 'red'
    }

    this.initPrice = price;
    return color
  }
}
