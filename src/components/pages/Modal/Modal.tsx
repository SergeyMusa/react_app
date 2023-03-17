import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {CardsList} from "../Cards/CardsList";

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
    // active: any;//string; //boolean; // состояние-видна ли компонента
    // setActive: any; //FunctionComponent; // функция изменяет состояние видимости
    // zzz?: any;
}

// export class MyModal extends React.Component<ModalProps> {


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

export default function CustomizedDialogs(props: ModalProps) {
    const [open, setOpen] = React.useState(false);
    const { modalTitle, modalMessage, modalObj, ...other } = props;

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h3>{modalTitle}</h3>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {modalMessage}
                        <CardsList data={modalObj}/>
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