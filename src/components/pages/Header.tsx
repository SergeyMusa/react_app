import React from "react";
import {AccessTime} from "@mui/icons-material";
import {AppBar, Toolbar, IconButton, Typography, TextField} from "@mui/material";
import Search from "../store/Search";
import TimerSlider2 from "../store/TimerSlider2";
import Timer3 from "../store/Timer3";

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
                        <Timer3 />

                        {/*<IconButton*/}
                        {/*    color={'inherit'}*/}
                        {/*>*/}
                        {/*    <TimerSlider2 />*/}
                        {/*    /!*<AccessTime />*!/*/}
                        {/*</IconButton>*/}
                   </Toolbar>
               </AppBar>
             </div>
        )
    }
}
