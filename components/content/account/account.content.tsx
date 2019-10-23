import {
  Button,
  Container,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { ITransaction } from '../../../lib/models/transaction.model';
import { PaymentsService } from '../../../services/payments.service';
import { TransactionDialog } from './account.transaction.dialog';

export const useStyles = makeStyles(theme => ({
  cardInfo: {
    padding: theme.spacing(2),
  },
}));

const AccountContent = () => {
  const router = useRouter();
  const { code } = router.query;

  if (code) {
    PaymentsService.createStripeAccount(code as string).then((res: string) => {
      console.log(res);
    });
  }

  const [amount, setAmount] = React.useState();
  const [depositOpen, setDepositOpen] = React.useState(false);
  const [withdrawOpen, setWithdrawOpen] = React.useState(false);
  const [clientSecret, setClientSecret] = React.useState('');

  const onDeposit = () => {
    PaymentsService.getToken(amount).then(res => {
      setClientSecret(res.clientSecret);
      console.log(clientSecret);
      setDepositOpen(true);
    });
  };

  const onWithdraw = () => {
    setWithdrawOpen(true);
  };

  const handleDepositClose = (tokenId: string) => {
    setDepositOpen(false);
    console.log(tokenId);
  };

  const handleWithdrawClose = (tokenId: string) => {
    if (tokenId) {
      PaymentsService.withdraw(tokenId, amount).then((res: any) => {
        console.log(res);
        setWithdrawOpen(false);
      });
    }
    setWithdrawOpen(false);
  };

  const transactions: ITransaction[] = [];

  return (
    <Container maxWidth='md'>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Button>
            <Link href='https://connect.stripe.com/express/oauth/authorize?redirect_uri=http://localhost:3000/account&client_id=ca_G2TdOPuijC1VlDzqRlrPy6K71xfr1JI0'>
              Connect to stripe
            </Link>
          </Button>
        </Grid>
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
      <TransactionDialog
        open={depositOpen}
        onClose={handleDepositClose}
        clientSecret={clientSecret}
      ></TransactionDialog>
      <TransactionDialog
        open={withdrawOpen}
        onClose={handleWithdrawClose}
      ></TransactionDialog>
    </Container>
  );
};

export default AccountContent;
