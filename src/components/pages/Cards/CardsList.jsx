import {CardsListItem} from "./CardsListItem";
import React from "react";
import './CardsList.css';
import {Grid} from "@mui/material";
// import Search from "../../store/Search";

export class CardsList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    elements = () => {
        console.log('CardsList', this.props.data )
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;
            // console.log('id',id);
            return (
                // <Grid item xs='12' md='4'>
                    <CardsListItem key={id} {...itemProps} />
                // </Grid>
            )
        })
    }
  render () {
    return (
        <Grid container
              spacing={1}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              mt = {1}
        >
            {/*rowSpacing={1} columnSpacing={{ xs:1, sm:3, md:6 }} >*/}
            {/*<div className={"app-list"}>*/}
                {this.elements()}
            {/*</div>*/}
        </Grid>
    )
  }
}
