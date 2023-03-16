import React from "react";
import {AttachMoney} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {green} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import { deepPurple } from '@mui/material/colors';
import Grid from "@mui/material/Grid";

// const CardsListItem = ({CoinInfo, DISPLAY, RAW}) => { //{id, cryName, raw, display, imageUrl}
export class CardsListItem extends React.Component {
    classNames = 'priceColor normalColor';
    newPrice = this.props.RAW.USD.PRICE ;
    // oldPrice = RAW.USD.PRICE ;
    // !!! думать как запоминать, может через локал сторадж
    constructor(props) {
        super(props);
        this.state ={
            time: 1
        }
    }
    changeTime = () => {
        console.log('changeTime')
    }
    changeClassName = () => { //  ??? WTF---------------------
        console.log('newPrice',this.newPrice);
        this.setState(state => ({
            time: state.time + 1
        }))

        // if( this.newPrice < this.oldPrice) {
        //     this.classNames += ' red';
        // } else if (newPrice > oldPrice) {
        //     this.classNames += ' green';
        // } else {
        //     this.classNames += ' normalColor';
        // }
    }

  render() {
        const {CoinInfo, DISPLAY, RAW} = this.props
    return (
        //     <img src={"https://www.cryptocompare.com/"+imageUrl} alt={cryName} width={50} height={50}/>
        <Grid item xs >
            <h3>{this.state.time}</h3>
            {/*<button onClick={this.changeClassName}> [+++] </button>*/}
                <div className='EmployersList' style={{margin: 'auto'}} >
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader
                            avatar={
                                <Avatar  aria-label="recipe" >
                                     {/*sx={{bgcolor: deepPurple[500]}}*/}
                                    {DISPLAY.USD.FROMSYMBOL}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title={"id: " + CoinInfo.Id}
                            className={this.classNames} // ??? будеам менять цвет при повышении или понижении .red .green
                        />
                        <CardMedia
                            component="img"
                            sx ={{height: 170, width: 170, margin: 'auto'}}
                            height = '180'
                            image={"https://www.cryptocompare.com/" + CoinInfo.ImageUrl}
                            alt={CoinInfo.Id}

                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                1 '{DISPLAY.USD.FROMSYMBOL}'({CoinInfo.Name}) = {RAW.USD.PRICE}
                                <AttachMoney fontSize="small" sx={{ color: green[500] }}/>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
        </Grid>

    )
  }
}
// sx={{ color: green[500] }}>add_circle</Icon>
// <Icon fontSize="small">add_circle</Icon>
//#66CC00
//https://get-color.ru/green/
// export default CardsListItem;