import {TextField} from "@mui/material";
import React from "react";

const Search = (props) => {
    const {onChange, value} = props;
    return  <TextField
        label={'search'}
        type={'search'}
        value={value}
        fullWidth
        onChange={onChange}
        sx = {{mt: '1rem'}}
    />;
};

export default Search
