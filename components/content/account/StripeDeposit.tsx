import React from 'react';
import { CardForm } from './_CardForm';

export class StripeDeposit extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { stripe: null };
  }
  public componentDidMount() {
    this.setState({
      stripe: window.Stripe('pk_test_uHNHYjxuj9vBgItkOl9NAmas'),
    });
  }
  public render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <CardForm></CardForm>
        </Elements>
      </StripeProvider>
    );
  }
}
