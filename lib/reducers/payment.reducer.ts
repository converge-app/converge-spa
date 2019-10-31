import { combineReducers } from 'redux';
import { paymentConstants } from '../constants/payment.constants';

const accountExistsInitialState = {
  gettingAccount: false,
  gotAccount: false,
};

const accountExists = (state: any = accountExistsInitialState, action: any) => {
  switch (action.type) {
    case paymentConstants.CHECK_ACCOUNT_EXISTS_REQUEST:
      return {
        gettingAccount: true,
        userId: action.userId,
      };
    case paymentConstants.CHECK_ACCOUNT_EXISTS_SUCCESS:
      return {
        gotAccount: true,
        exists: action.exists,
      };
    case paymentConstants.CHECK_ACCOUNT_EXISTS_FAILURE:
      return accountExistsInitialState;
    default:
      return state;
  }
};

export const payment = combineReducers({
  accountExists,
});
