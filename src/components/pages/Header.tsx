import React from "react";
// import {AccessTime} from "@mui/icons-material";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {storeTimer} from "../store/StoreTimer";
import {Timer4} from "../store/Timer4";
import {observer} from "mobx-react";
// import {CardsListItem} from "./Cards/CardsListItem";

@observer
export class Header extends React.Component {

    // isDrawTimer = () => {
    //     if (store.timerVisible) {
    //         return  <Timer4 />
    //     }
    // }

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
                        {/*{this.isDrawTimer()}*/}
                        {storeTimer.timerVisible ? <Timer4 /> : null}
                    </Toolbar>
               </AppBar>
             </div>
        )
    }
}
