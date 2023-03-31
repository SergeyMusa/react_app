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
// import {computed, toJS} from 'mobx'
import {string} from "prop-types";
import {storeCoins} from "../../store/StoreCoins";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
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
  isOpen: boolean;
  onClosed: () => void;
  id?: any;
  // modalObj?: [];
  // functionTimer: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const {children, onClose, ...other} = props;
  return (
    <DialogTitle sx={{m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }} >
          <CloseIcon/>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

@observer
export class Modal extends React.Component<ModalProps> {
  JModalData = null
  state = {
    id: string,
    modalData: {},
    modalTitle: string,
  }
  // @computed private get dataData(){
  //   return StoreCoins.ModalData
  // }

  componentDidMount() {
    console.log("ModalProps",this.props )
    const {modalId, ModalData} = storeCoins;

    this.JModalData = JSON.parse(JSON.stringify( ModalData ));
    console.log("JModalData",this.JModalData );

    const itemData = ModalData.findIndex(ModalData => ModalData.CoinInfo.Id === modalId);
    console.log('itemData',itemData)

    storeCoins.setItemData(ModalData[itemData]); // modalItem = ModalData[itemData]; // !!! а надо ли туда?
    // console.log( 'modalItem___', storeCoins.modalItem,  'modalId___', storeCoins.modalId );
    // console.log( 'ModalData___', storeCoins.ModalData );

    this.setState({id: modalId})
    console.log( 'modalId___', storeCoins.modalId );
    this.setState({modalData: ModalData[itemData] } ) ;
    console.log( 'ModalData___', storeCoins.ModalData , storeCoins.ModalData.length);

    if (storeCoins.ModalData.length > 0) {
      this.setState({modalTitle: JSON.parse(JSON.stringify( ModalData[itemData] ))?.CoinInfo.FullName})
    }
    console.log( 'modalTitle___', this.state.modalTitle);

    console.log( 'modalData___', this.state.modalData );

  }


  render() {
    const {isOpen, onClosed, id} = this.props; //, id, modalTitle, modalMessage
    const {modalData, modalTitle} = this.state; //id,
    // console.log('modalTitle', modalTitle);


    return (
      <div>
        <BootstrapDialog
          onClose={onClosed}
          aria-labelledby="customized-dialog-title"
          open={isOpen}

        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={onClosed}>
            {modalTitle} : {id}
          </BootstrapDialogTitle>
          <DialogContent dividers sx={{minHeight: 380}}>
            <Typography gutterBottom component="div">
              {/*{modalMessage} */}
              <CardsListItemFull key={id} {...modalData} />
            </Typography>

          </DialogContent>
        </BootstrapDialog>
      </div>
    );
  }
}