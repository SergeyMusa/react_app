import {EmployersListItem} from "./EmployersListItem";
import React from "react";
import styles from './EmployersList.css';
import {Grid} from "@mui/material";
// import Search from "../../store/Search";

export class EmployersList extends React.Component {

    constructor(props) {
        super(props);
    }
    elements = () => {
        console.log('EmployersList', this.props.data )
        return this.props.data.map(item => {
            const {id = item.CoinInfo.Id, ...itemProps} = item;
            // console.log('id',id);
            return (
                // <Grid item xs='12' md='4'>
                    <EmployersListItem key={id} {...itemProps} />
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
