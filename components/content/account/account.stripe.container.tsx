import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { CardForm } from './account.card.form';

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
          <CardForm
            deposit={this.props.deposit != null}
            withdraw={this.props.withdraw != null}
            clientSecret={this.props.clientSecret}
            handleResult={(res: any) => this.props.onClose(res)}
          ></CardForm>
        </Elements>
      </StripeProvider>
    );
  }
}
