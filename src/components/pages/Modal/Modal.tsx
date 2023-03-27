import * as React from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {observer} from "mobx-react";
import {CardsListItemFull} from "../Cards/CardsListItemFull";
import StoreCoins from "../../store/StoreCoins";
import {computed, toJS} from 'mobx'

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
    modalTimer?: number;
    // modalObj?: [];
    isOpen: boolean;
    onClosed:  () => void;
    id?: any,
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
  @computed private get dataData(){
    return StoreCoins.CoinsData
  }

  componentDidMount() { // ??? узнать а закончился ли жизненый цикл Cards  и иожно ли вкадывать циклы
    const { modalId, CoinsData  } = StoreCoins;

    // alert(CoinsData.findIndex(CoinsData => CoinsData. .CoinInfo.Id == modalId)); // 0

    // const dataData = toJS(CoinsData);
    console.log('-CoinsData-',  this.dataData );
    const itemData = this.dataData.findIndex(dataData => dataData.CoinInfo.Id == modalId);
    // const itemData = dataData.findIndex(dataData => dataData.CoinInfo.Id == modalId);

    console.log('itemData', itemData, this.dataData[ 1 ]);
    // const modalObj = StoreCoins.CoinsData;
    console.log('modalId___', modalId);
    // console.log('modalObj___', CoinsData);

  }

    render() {
        const { modalTitle, modalMessage, isOpen, onClosed, id  } = this.props;

        console.log('isOpen___', isOpen);


        return (
            <div>
                <BootstrapDialog
                    onClose={onClosed}
                    aria-labelledby="customized-dialog-title"
                    open={isOpen}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={onClosed}>
                        {modalTitle}
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            {modalMessage} : {id}
                            {/*<CardsListItemFull key={id} {...modalObj} />*/}
                        {/*  ??? __________________________________________  */}
                        </Typography>
                    </DialogContent>
                </BootstrapDialog>
            </div>
        );
    }
}