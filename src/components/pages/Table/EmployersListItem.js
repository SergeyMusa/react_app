import React from "react";
import {AttachMoney} from "@mui/icons-material";

const EmployersListItem = ({id, cryName, raw, display, imageUrl}) => {
    return (
        <div>
            <h2>id = {id} </h2>
            <h2> 1 '{display}'({cryName}) = {raw} <AttachMoney fontSize="medium" color="#98FB98" />  </h2>
            <img src={"https://www.cryptocompare.com/"+imageUrl} alt={cryName} width={50} height={50}/>
        </div>
    )
}
// sx={{ color: green[500] }}>add_circle</Icon>
// <Icon fontSize="small">add_circle</Icon>
//#66CC00
//https://get-color.ru/green/
export default EmployersListItem;