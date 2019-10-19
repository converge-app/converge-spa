import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { ITransaction } from '../../../lib/models/transaction.model';
import { StripeContainer } from './account.stripe.container';

const useStyles = makeStyles((theme) => ({
  cardInfo: {
    padding: theme.spacing(2),
  },
}));

export interface SimpleDialogProps {
  open: boolean;
  onClose: (tokenId: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose('');
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      fullWidth
      open={open}
    >
      <DialogTitle id='simple-dialog-title'>Deposit money</DialogTitle>
      <Container className={classes.cardInfo}>
        <StripeContainer></StripeContainer>
      </Container>
    </Dialog>
  );
}

const AccountContent = () => {
  const [amount, setAmount] = React.useState();
  const [depositOpen, setDepositOpen] = React.useState(false);
  const onDeposit = () => {
    setDepositOpen(true);
  };

  const handleDepositClose = (tokenId: string) => {
    setDepositOpen(false);
    console.log(tokenId);
  };

  const onWithdraw = () => {};

  const transactions: ITransaction[] = [];

  return (
    <Container maxWidth='md'>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Typography variant='h6'>BALANCE</Typography>
          <Typography variant='h2' color='primary'>
            50000$
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type='number'
            label='amount'
            value={amount}
            fullWidth
            onChange={(e) => setAmount(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container direction='column' spacing={3}>
            <Grid item>
              <Button variant='contained' color='primary' onClick={onDeposit}>
                Deposit
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' color='primary' onClick={onWithdraw}>
                Withdraw
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {transactions.length > 0 ? (
          <Grid item xs={12}>
            <Typography variant='h6'>Account transactions</Typography>
            <Grid container direction='column' spacing={3}>
              {transactions.map((transaction: ITransaction, index) => {
                return (
                  <Grid item key={index}>
                    <Typography variant='body1'>
                      {transaction.amount}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      <SimpleDialog
        open={depositOpen}
        onClose={handleDepositClose}
      ></SimpleDialog>
    </Container>
  );
};

export default AccountContent;
