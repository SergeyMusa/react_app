import React from "react";
import {AttachMoney} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


// const EmployersListItem = ({CoinInfo, DISPLAY, RAW}) => { //{id, cryName, raw, display, imageUrl}
export class EmployersListItem extends React.Component {
    classNames = 'priceColor normalColor';
    // newPrice = this.props.RAW.USD.PRICE ;
    // oldPrice = RAW.USD.PRICE ;
    // !!! думать как запоминать, может через локал сторадж
    constructor(props) {
        super(props);
        this.state ={
            time: 1
        }
    }

    // if( this.newPrice < this.oldPrice) {
    //     this.classNames += ' red';
    // } else if (newPrice > oldPrice) {
    //     this.classNames += ' green';
    // } else {
    //     this.classNames += ' normalColor';
    // }
  render() {
        const {CoinInfo, DISPLAY, RAW} = this.props
    return (
        // <div>
        //     <h2>id = {id} </h2>
        //     <h2> 1 '{display}'({cryName}) = {raw} <AttachMoney fontSize="medium" color="#98FB98" />  </h2>
        //     <img src={"https://www.cryptocompare.com/"+imageUrl} alt={cryName} width={50} height={50}/>
        // </div>
        <ul>
            <div className='EmployersList'>
                <Card sx={{maxWidth: 345}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                {DISPLAY.USD.FROMSYMBOL}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title={"id: " + CoinInfo.Id}
                        // subheader="September 14, 2016"
                        className={this.classNames} // ??? будеам менять цвет при повышении или понижении .red .green
                    />
                    <CardMedia
                        component="img"
                        height="190"
                        image={"https://www.cryptocompare.com/" + CoinInfo.ImageUrl}
                        alt={CoinInfo.Id}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            1 '{DISPLAY.USD.FROMSYMBOL}'({CoinInfo.Name}) = {RAW.USD.PRICE} <AttachMoney
                            fontSize="small"/>
                        </Typography>
                    </CardContent>
                </Card>

                {/*<ul className={"app-list"}>*/}
                {/*    <EmployersListItem*/}
                {/*        id={item.CoinInfo.Id}*/}
                {/*        cryName={item.CoinInfo.Name}*/}
                {/*        raw={item.RAW.USD.PRICE}*/}
                {/*        display={item.DISPLAY.USD.FROMSYMBOL}*/}
                {/*        imageUrl={item.CoinInfo.ImageUrl}*/}
                {/*        cryFullName={item.CoinInfo.FullName}*/}
                {/*        cryUrl={item.CoinInfo.Url}*/}
                {/*        // cryUrl={ dataX[keyX].CoinInfo.Url }*/}
                {/*        // cryNetHashesPerSecond={ cry.Data[keyX].CoinInfo.NetHashesPerSecond }*/}
                {/*    />*/}
                {/*</ul>*/}
            </div>
        </ul>
    )
  }
}
// sx={{ color: green[500] }}>add_circle</Icon>
// <Icon fontSize="small">add_circle</Icon>
//#66CC00
//https://get-color.ru/green/
// export default EmployersListItem;