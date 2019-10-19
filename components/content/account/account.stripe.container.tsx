import React from 'react';
import { CardForm } from './account.card.form';
import { StripeProvider, Elements } from 'react-stripe-elements';

export class StripeContainer extends React.Component<any, any> {
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
          <CardForm handleResult={(res: any) => console.log(res)}></CardForm>
        </Elements>
      </StripeProvider>
    );
  }
}
