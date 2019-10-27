import {
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { PaymentsService } from '../../../services/payments.service';
import { TransactionDialog } from './account.transaction.dialog';
import AccountTransactions from './account.transactions';

export const useStyles = makeStyles(theme => ({
  cardInfo: {
    padding: theme.spacing(2),
  },
}));

const AccountContent = () => {
  const [amount, setAmount] = React.useState();
  const [depositOpen, setDepositOpen] = React.useState(false);
  const [clientSecret, setClientSecret] = React.useState('');
  const [balance, setBalance] = React.useState<any>();

  useEffect(() => {
    PaymentsService.getBalance()
      .then(blnc => {
        setBalance(blnc);
      })
      .catch(err => console.error(err));
  }, []);

  const onDeposit = () => {
    PaymentsService.getToken(amount).then(res => {
      setClientSecret(res.clientSecret);
      console.log(clientSecret);
      setDepositOpen(true);
    });
  };

  const handleDepositClose = (tokenId: string) => {
    setDepositOpen(false);
    console.log(tokenId);
  };

  const onWithdraw = () => {
    PaymentsService.withdraw(amount);
  };

  return (
    <Container maxWidth='md'>
      <Grid container spacing={3}>
        {balance && balance.available.length > 0 ? (
          <Grid item xs={12} md={4}>
            <Typography variant='h6'>BALANCE</Typography>
            <Typography variant='h2' color='primary'>
              {balance.available[0].amount / 100}
              {' ' + balance.available[0].currency}
            </Typography>
          </Grid>
        ) : null}

        <Grid item xs={12} md={4}>
          <TextField
            type='number'
            label='amount'
            value={amount}
            fullWidth
            onChange={e => setAmount(e.target.value)}
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
        <Grid item xs={12}>
          <Typography color='primary' variant='h5'>
            Status
          </Typography>
        </Grid>
        {balance && balance.available.length > 0 ? (
          <Grid item xs={12} md={4}>
            <Typography variant='body1' color='textSecondary'>
              Available {balance.available[0].amount / 100}
              {' ' + balance.available[0].currency}
            </Typography>
          </Grid>
        ) : null}

        {balance && balance.pending.length > 0 ? (
          <Grid item xs={12} md={4}>
            <Typography variant='body1' color='textSecondary'>
              Pending {balance.pending[0].amount / 100}
              {' ' + balance.pending[0].currency}
            </Typography>
          </Grid>
        ) : null}

        {balance &&
        balance.connect_reserved &&
        balance.connect_reserved.length > 0 ? (
          <Grid item xs={12} md={4}>
            <Typography variant='body1' color='textSecondary'>
              Pending {balance.connect_reserved[0].amount / 100}
              {' ' + balance.connect_reserved[0].currency}
            </Typography>
          </Grid>
        ) : null}

        <Grid item xs={12}>
          <Typography variant='h5' color='primary'>
            Transactions
          </Typography>
        </Grid>

        <AccountTransactions />
      </Grid>

      <TransactionDialog
        open={depositOpen}
        onClose={handleDepositClose}
        clientSecret={clientSecret}
      ></TransactionDialog>
    </Container>
  );
};

export default AccountContent;
