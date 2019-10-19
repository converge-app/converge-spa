import React, { Component } from 'react';
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements';
import { Button, Grid } from '@material-ui/core';

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
    const clientSecret: string = 'blabla';

    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe.handleCardPayment(clientSecret, {}).then((res: any) => {
        console.log(res);
      });
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
            Pay
          </Button>
        </form>
      </div>
    );
  }
}

export const CardForm = injectStripe(_CardForm);
