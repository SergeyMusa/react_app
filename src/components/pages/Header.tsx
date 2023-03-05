import React from "react";
import {AccessTime} from "@mui/icons-material";
import {AppBar, Toolbar, IconButton, Typography, TextField} from "@mui/material";
import Search from "../store/Search";

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
                        <Search />
                        <IconButton
                            color={'inherit'}
                        >
                            <AccessTime />
                        </IconButton>
                   </Toolbar>
               </AppBar>
             </div>
        )
    }
}
