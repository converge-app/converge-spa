import { submitConstants } from '../constants/submit.constants';

export const submitting = (state: any = {}, action: any) => {
  switch (action.type) {
    case submitConstants.SET_SUBMITTING:
      return {
        ...state,
        submitting: action.submitting,
        active: true,
        query: action.isQuery,
      };
    case submitConstants.SHOW_MESSAGE_SUCCESS:
      return {
        submitting: false,
        active: true,
        message: action.message,
        type: submitConstants.SUCCESS,
      };
    case submitConstants.SHOW_MESSAGE_FAILURE:
      return {
        submitting: false,
        active: true,
        message: action.message,
        type: submitConstants.FAILURE,
      };
    case submitConstants.ALERT_CLEAR:
      return {
        submitting: false,
        active: false,
        message: '',
        type: '',
      };
    default:
      return state;
  }
};
