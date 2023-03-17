import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {observer} from "mobx-react";
import { CardsList } from '../Cards/CardsList';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

export interface ModalProps {
    modalTitle?: string;
    modalMessage?: any;
    // modalObj: {};// title, img, main-text
    modalTimer?: number;
    modalObj?: {};
    isOpen: boolean;
    onClosed:  () => void;
}


function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

@observer
export class Modal extends React.Component<ModalProps> {
    render() {
        // const [open, setOpen] = React.useState(false);
        const { modalTitle, modalMessage, modalObj, isOpen, onClosed } = this.props;

        // const handleClickOpen = function () {
        //     setOpen(true);
        // };
        // const handleClose = () => {
        //     setOpen(false);
        // };
        console.log('isOpen___', isOpen);

        return (
            <div>
                {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
                {/*    Open dialog*/}
                {/*</Button>*/}
                <BootstrapDialog
                    onClose={onClosed}
                    aria-labelledby="customized-dialog-title"
                    open={isOpen}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={onClosed}>
                        <h3>{modalTitle}</h3>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            {modalMessage}
                            {/*<CardsList data={modalObj}/>*/}
                        {/*  ??? __________________________________________  */}
                        </Typography>
                    </DialogContent>
                    {/*<DialogActions>*/}
                    {/*    <Button autoFocus onClick={handleClose}>*/}
                    {/*        Save changes*/}
                    {/*    </Button>*/}
                    {/*</DialogActions>*/}
                </BootstrapDialog>
            </div>
        );
    }
}