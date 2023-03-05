import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {RestorePage, FavoriteBorder, AccessTime, LocationOn} from "@mui/icons-material";
import {FileCopy } from '@mui/icons-material';
// import {value} from "lodash/seq";

// let footer = document.querySelector('[role="footer"]');
//
// const setClassFooter = () => {
//     footer.className += ' footer'; //.className += ' footer';
// }
// const x = debounce(setClassFooter, 200); // хз почему класс дублируется
// (function (){
//     x();
// }())
// const setFooter = () => {
//     footer.innerHTML = `<div >
//               <p> © 2023 Copyright MuSa </p>
//             </div>`
// }
// export default setFooter;
//


// export class Footer extends React.Component {
export default function Footer() {
        const [value, setValue] = React.useState('recents');
        const handleChange = (event, newValue) => {
            setValue(newValue);
         };
    // }
    // public render () {
        return (
            <div className={'footer'} >
                <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestorePage />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteBorder />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOn />}
                    />
                    <BottomNavigationAction label="Folder" value="folder" icon={<FileCopy />} />
                </BottomNavigation>
               <p> © 2023 Copyright MuSa </p>
             </div>
        )
}
