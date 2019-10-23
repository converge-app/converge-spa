import { Container, Dialog, DialogTitle } from '@material-ui/core';
import React from 'react';
import { useStyles } from './account.content';
import { StripeContainer } from './account.stripe.container';

export interface ITransactionDialogProps {
  clientSecret?: string;
  open: boolean;
  onClose: (tokenId: string) => void;
}

export function TransactionDialog(props: ITransactionDialogProps) {
  const classes = useStyles();
  const { onClose, open } = props;
  const handleClose = () => {
    onClose('');
  };
  if (props.clientSecret) {
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        fullWidth
        open={open}
      >
        <DialogTitle id='simple-dialog-title'>Deposit money</DialogTitle>
        <Container className={classes.cardInfo}>
          <StripeContainer
            deposit={true}
            clientSecret={props.clientSecret}
            onClose={onClose}
          ></StripeContainer>
        </Container>
      </Dialog>
    );
  } else {
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby='simple-dialog-title'
        fullWidth
        open={open}
      >
        <DialogTitle id='simple-dialog-title'>Deposit money</DialogTitle>
        <Container className={classes.cardInfo}>
          <StripeContainer
            withdraw={true}
            clientSecret={props.clientSecret}
            onClose={onClose}
          ></StripeContainer>
        </Container>
      </Dialog>
    );
  }
}
