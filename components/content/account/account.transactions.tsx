import { useEffect, useState } from 'react';

import { PaymentsService } from '../../../services/payments.service';

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const AccountTransactions = () => {
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    PaymentsService.getTransactions().then(transactionsResponse => {
      console.log(transactionsResponse);
      setTransactions(transactionsResponse);
    });
  }, []);

  const formatDate = (seconds: number) => {
    return new Date(seconds * 1000).toUTCString();
  };

  if (transactions) {
    return (
      <Grid item xs={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Created</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Netto</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction: any) => (
              <TableRow key={transaction.id}>
                <TableCell>{formatDate(transaction.created)}</TableCell>
                <TableCell>{formatDate(transaction.available_on)}</TableCell>
                <TableCell>{transaction.amount / 100}</TableCell>
                <TableCell>{transaction.currency}</TableCell>
                <TableCell>{transaction.net / 100}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    );
  }
  return null;
};

export default AccountTransactions;
