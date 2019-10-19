import React, { Component } from 'react';

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
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
      this.props.stripe.createToken().then(this.props.handleResult);
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  public render() {
    return (
      <div className='CardDemo'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Card details
            <CardElement onChange={this.handleChange} {...createOptions()} />
          </label>
          <div className='error' role='alert'>
            {this.state.errorMessage}
          </div>
          <button>Pay</button>
        </form>
      </div>
    );
  }
}

export const CardForm = injectStripe(_CardForm);
