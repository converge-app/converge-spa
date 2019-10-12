import { combineReducers } from 'redux';
import { profileConstants } from '../constants/profile.constants';

const getByUserId = (state: any = {}, action: any) => {
  switch (action.type) {
    case profileConstants.GET_BY_USER_REQUEST:
      return {
        gettingProfile: true,
        userId: action.userId,
      };
    case profileConstants.GET_BY_USER_SUCCESS:
      return {
        gotProfile: true,
        profile: action.profile,
      };
    case profileConstants.GET_BY_USER_FAILURE:
      return {};
    default:
      return state;
  }
};

export const profile = combineReducers({
  getByUserId,
});
