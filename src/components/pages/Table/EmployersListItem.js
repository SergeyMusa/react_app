import React from "react";
import {AttachMoney} from "@mui/icons-material";
// import {AttachMoneyIcon} from '@material-ui/icons/AttachMoney';

const EmployersListItem = ({id, cryName, raw, display, imageUrl}) => {
    return (
        <div>
            <h2>id = {id} </h2>
            <h2> 1 '{display}'({cryName}) = {raw} <AttachMoney fontSize="medium" color='#333333' />  </h2>
            <img src={"https://www.cryptocompare.com/"+imageUrl} alt={cryName} width={50} height={50}/>
        </div>
    )
}
// sx={{ color: green[500], fontSize: 30
// sx={{ color: green[500] }}>add_circle</Icon>
// <Icon fontSize="small">add_circle</Icon>
// <Icon sx={{ fontSize: 30 }}
export default EmployersListItem;