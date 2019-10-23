import { Button, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  injectStripe,
} from 'react-stripe-elements';

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '20px',
        color: '#13A8FE',
        iconColor: '#13A8FE',
        fontFamily: 'Montserrat, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#bbb',
        },
      },
      invalid: {
        color: '#CF0060',
      },
    },
  };
};

class _CardForm extends Component<any> {
  public state = {
    errorMessage: '',
  };
  public handleChange = ({ error }: any) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };
  public handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (this.props.stripe) {
      if (this.props.deposit) {
        console.log('Deposit');
        console.log(this.props.clientSecret);
        this.props.stripe
          .handleCardPayment(this.props.clientSecret, {})
          .then((res: any) => {
            console.log(res);
          });
      } else if (this.props.withdraw) {
        console.log('Withdraw');
        this.props.stripe.createToken({}).then((res: any) => {
          this.props.handleResult(res.token.id);
        });
      }
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  public render() {
    return (
      <div className='CardDemo'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Grid container spacing={3} direction='column' justify='center'>
            <Grid item xs={12}>
              <label>
                Card Number
                <CardNumberElement
                  onChange={this.handleChange}
                  {...createOptions()}
                />
              </label>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <label>
                    Card Expiration
                    <CardExpiryElement
                      onChange={this.handleChange}
                      {...createOptions()}
                    />
                  </label>
                </Grid>
                <Grid item xs={6}>
                  <label>
                    Card CVCE
                    <CardCVCElement
                      onChange={this.handleChange}
                      {...createOptions()}
                    />
                  </label>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className='error' role='alert'>
            {this.state.errorMessage}
          </div>
          <Button
            variant='contained'
            color='primary'
            onClick={this.handleSubmit}
          >
            {this.props.deposit == true ? 'Deposit' : 'Withdraw'}
          </Button>
        </form>
      </div>
    );
  }
}

export const CardForm = injectStripe(_CardForm);
