import React from "react";
// import {AccessTime} from "@mui/icons-material";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {store} from "../store/StoreTimer";
import {Timer4} from "../store/Timer4";

export class Header extends React.Component {
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
                        {(store.timerActive) ? <Timer4  inputTime={10} messageTimer={'Page_Timers'} activeTimer={true} /> : ''}
                    </Toolbar>
               </AppBar>
             </div>
        )
    }
}
