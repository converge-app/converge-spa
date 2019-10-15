import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import React from 'react';

const AccountContent = () => {
  const [amount, setAmount] = React.useState();

  const onDeposit = () => {};

  const onWithdraw = () => {};

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
        <Grid item xs={12}>
          <Typography variant='h6'>Account transactions</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountContent;
