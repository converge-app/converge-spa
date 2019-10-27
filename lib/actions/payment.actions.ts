import { PaymentsService } from '../../services/payments.service';
import { paymentConstants } from '../constants/payment.constants';
import { SubmitActions } from './submit.actions';

export class PaymentActions {
  public static accountExists(userId: string) {
    const request = (value: string) => ({
      type: paymentConstants.CHECK_ACCOUNT_EXISTS_REQUEST,
      userId: value,
    });
    const success = (exists: boolean) => ({
      type: paymentConstants.CHECK_ACCOUNT_EXISTS_SUCCESS,
      exists,
    });
    const failure = (error: any) => ({
      type: paymentConstants.CHECK_ACCOUNT_EXISTS_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(userId));
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const exists: boolean = await PaymentsService.accountExists(userId);
        dispatch(success(exists));
      } catch (error) {
        dispatch(failure(error));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }
}
