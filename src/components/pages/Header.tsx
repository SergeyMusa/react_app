import React from "react";
// import {AccessTime} from "@mui/icons-material";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {store} from "../store/StoreTimer";
import {Timer4} from "../store/Timer4";
// import {CardsListItem} from "./Cards/CardsListItem";

export class Header extends React.Component {

    isDrawTimer = () => {
        if (store.timerActive) {
            return (
                <Timer4 />
            )
        }
    }

    public render () {
        return (
            <div className={'header'} >
               <AppBar position={'static'}>
                    <Toolbar>
                       <Typography
                           fontSize={'18px'}
                            variant={'h6'}
                            component={'span'}
                           sx={{flexGrow: 1}}
                       >
                           MuSa_App
                       </Typography>
                        {this.isDrawTimer()}
                        {/*{store.timerActive && <Timer4 />}*/}
                    </Toolbar>
               </AppBar>
             </div>
        )
    }
}
