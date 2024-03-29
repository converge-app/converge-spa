import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountContent from '../components/content/account/account.content';
import CreateAccountContent from '../components/content/account/create-account/account.create.content';
import DashboardLayout from '../components/layouts/dashboard.layout';
import CentralSpinner from '../components/styles/utility/spinner.central';
import { PaymentActions } from '../lib/actions/payment.actions';
import { services } from '../services';
import { PaymentsService } from '../services/payments.service';
import { SubmitActions } from '../lib/actions/submit.actions';
import Router from 'next/router';

const AccountPage: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PaymentActions.accountExists(services.authentication.getId()));
    if (code) {

      dispatch(SubmitActions.setSubmitting(true));

      PaymentsService.createStripeAccount(code as string).then(
        (res: string) => {
          dispatch(SubmitActions.wasSuccess(res));
          Router.push("/account", "/account", {shallow: true});
        },
      ).catch(error => {
        dispatch(SubmitActions.wasFailure(error))
      });
    }
  }, []);

  const { exists, gotAccount } = useSelector(
    (state: any) => state.payment.accountExists,
  );

  if (!gotAccount) {
    return <CentralSpinner></CentralSpinner>;
  } else {
    if (exists) {
      return (
        <DashboardLayout>
          <AccountContent></AccountContent>
        </DashboardLayout>
      );
    } else {
      return (
        <DashboardLayout>
          <CreateAccountContent></CreateAccountContent>
        </DashboardLayout>
      );
    }
  }
};

export default AccountPage;
