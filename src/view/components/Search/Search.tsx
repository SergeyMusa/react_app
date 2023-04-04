import {TextField} from "@mui/material";
import React from "react";
import {STORE_COINS} from "_store/StoreCoins";

const Search = (props?) => {
    // const {items, find} = props;
    const items  = props.items || STORE_COINS.searchItems;
    const find  = STORE_COINS.searchFind;
    const value = '';

    const onClick = () => {
        console.log('onChange');
        if (find.length === 0) {
            console.log('Search__no_input', items);
            return items;

            // console.log('Search__ok', find);
            return items.filter(item => {
                return items.indexOf(find) > -1
            })
        }
    }

    return  <TextField
        label={'search'}
        type={'search'}
        value={value}
        fullWidth
        onClick={onClick}
        sx = {{mt: '1rem'}}
    />;
};

export default Search
