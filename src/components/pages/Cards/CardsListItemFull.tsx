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
import Grid from "@mui/material/Grid";

// const CardsListItemFull = ({CoinInfo, DISPLAY, RAW}) => { //{id, cryName, raw, display, imageUrl}
export class CardsListItemFull extends React.Component<any, any> {
    classNames = 'priceColor normalColor';
    newPrice = this.props.RAW.USD.PRICE;
    constructor(props) {
        super(props);
        this.state = {
            time: 2,
        }
    }

    render() {
        const {CoinInfo, DISPLAY, RAW} = this.props

        return (
            <Grid item xs>
                {/*<h3>{this.state.time}</h3>*/}

                <div className='EmployersList' style={{margin: 'auto'}}>
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    {DISPLAY.USD.FROMSYMBOL}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                </IconButton>
                            }
                            title={"id: " + CoinInfo.Id}
                            className={this.classNames} // ??? будеам менять цвет при повышении или понижении .red .green
                        />
                        <CardMedia
                            component="img"
                            sx={{height: 170, width: 170, margin: 'auto'}}
                            height='180'
                            image={"https://www.cryptocompare.com/" + CoinInfo.ImageUrl}
                            alt={CoinInfo.Id}

                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                2 '{DISPLAY.USD.FROMSYMBOL}'({CoinInfo.Name}) = {RAW.USD.PRICE}

                                <AttachMoney fontSize="small" sx={{color: green[500]}}/>

                            </Typography>
                            <hr />
                            NetHashesPerSecond - {CoinInfo.NetHashesPerSecond}
                        </CardContent>
                    </Card>
                </div>
            </Grid>

        )
    }
}
