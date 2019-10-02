import { userConstants } from '../constants/user.constants';

export const signUp = (state: any = {}, action: any) => {
  switch (action.type) {
    case userConstants.SIGN_UP_REQUEST:
      return {
        signingUp: true,
        user: action.user,
      };
    case userConstants.SIGN_UP_SUCCESS:
      return {
        signedUp: true,
        user: action.user,
      };
    case userConstants.SIGN_UP_FAILURE:
      return {};
    default:
      return state;
  }
};
