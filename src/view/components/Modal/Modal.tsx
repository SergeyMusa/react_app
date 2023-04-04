import * as React from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {observer} from "mobx-react";
import {storeCoins} from "_store/StoreCoins";
import {CardsListItemFull} from "_view/pages/Cards/CardsListItemFull";

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
  state = {
    id: '',
    modalData: {},
    modalTitle: '',
  }

  componentDidMount() {
    const { modalId } = storeCoins; // !!! , ModalData < only store ?
    const data =  storeCoins.ModalData ;
    let itemData = data.findIndex(data => data.CoinInfo?.Id === modalId);
    storeCoins.setItemData(data[ itemData ]) ; // !!! а надо ли туда?
    this.setState({id: modalId})
    this.setState({modalData: data[ itemData ]})
    this.setState({modalTitle: data[ itemData ]?.CoinInfo?.FullName})
  }

  render() {
    const {isOpen, onClosed, id} = this.props; //, id, modalTitle, modalMessage
    const {modalData, modalTitle} = this.state; //id,

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
          <DialogContent dividers sx={{minHeight: 400}}>
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