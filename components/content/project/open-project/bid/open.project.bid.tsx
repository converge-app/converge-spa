import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React from 'react';

interface IFormValues {
  amount: string;
  message?: string;
}

const useStyles = makeStyles(theme => ({
  indent: {
    paddingLeft: theme.spacing(4),
  },
}));

const OpenProjectBid = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant={'h5'} color='primary'>
        Bid
      </Typography>
      <Formik
        initialValues={{
          amount: 0,
          message: '',
        }}
        validate={values => {
          const errors: Partial<IFormValues> = {};

          if (!values.amount) {
            errors.amount = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          values = values;
          setSubmitting(false);
        }}
        render={({ submitForm, isSubmitting }) => (
          <Form className={classes.indent}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                Message
              </Grid>
              <Grid item xs={6}>
                Amount
              </Grid>
              <Grid item xs={6}>
                <Button disabled={isSubmitting} onClick={submitForm}>
                  BID
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      ></Formik>
    </div>
  );
};

export default OpenProjectBid;
