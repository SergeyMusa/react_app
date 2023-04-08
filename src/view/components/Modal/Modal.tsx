import * as React from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {observer} from "mobx-react";

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
  title?: string;
  message?: any;
  isOpen: boolean;
  onClosed: () => void;
  children: React.ReactNode
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
          sx={{position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500],}}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

@observer
export class Modal extends React.Component<ModalProps> {
  render() {
    const {title, message, isOpen, children, onClosed} = this.props;

    return (
      <BootstrapDialog
        onClose={onClosed}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClosed}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{minHeight: 400}}>
          <Typography gutterBottom component="div">
            {children || message}
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    );
  }
}