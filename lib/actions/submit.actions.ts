import { submitConstants } from '../constants/submit.constants';

export class SubmitActions {
  public static setSubmitting(submitting = true, isQuery: boolean = false) {
    const isSubmitting = (value: boolean, query: boolean) => ({
      type: submitConstants.SET_SUBMITTING,
      isQuery: query,
      submitting: value,
    });

    return (dispatch: any) => {
      dispatch(isSubmitting(submitting, isQuery));
    };
  }

  public static wasSuccess(message: string) {
    const success = (value: string) => ({
      type: submitConstants.SHOW_MESSAGE_SUCCESS,
      message: value,
    });

    return (dispatch: any) => {
      dispatch(success(message));

      setTimeout(() => {
        dispatch(SubmitActions.clear());
      }, 3000);
    };
  }

  public static wasFailure(message: string) {
    const failure = (value: string) => ({
      type: submitConstants.SHOW_MESSAGE_FAILURE,
      message: value,
    });

    return (dispatch: any) => {
      dispatch(failure(message));

      setTimeout(() => {
        dispatch(SubmitActions.clear());
      }, 3000);
    };
  }

  public static clear() {
    const clear = () => ({
      type: submitConstants.ALERT_CLEAR,
    });

    return (dispatch: any) => {
      dispatch(clear());
    };
  }
}
