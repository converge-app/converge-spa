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
    case profileConstants.GET_BY_USER_NOT_FOUND:
      return {
        gotProfile: false,
        status: "Profile was not found or doesn't exist",
      };
    case profileConstants.GET_BY_USER_FAILURE:
      return {};
    default:
      return state;
  }
};

const createProfile = (state: any = {}, action: any) => {
  switch (action.type) {
    case profileConstants.CREATE_PROFILE_REQUEST:
      return {
        creatingProfile: true,
        profile: action.profile,
      };
    case profileConstants.CREATE_PROFILE_SUCCESS:
      return {
        createdProject: true,
        profile: action.profile,
      };
    case profileConstants.CREATE_PROFILE_FAILURE:
      return {};
    default:
      return state;
  }
};

const updateProfile = (state: any = {}, action: any) => {
  switch (action.type) {
    case profileConstants.UPDATE_PROFILE_REQUEST:
      return {
        creatingProfile: true,
        profile: action.profile,
      };
    case profileConstants.UPDATE_PROFILE_SUCCESS:
      return {
        createdProject: true,
        profile: action.profile,
      };
    case profileConstants.UPDATE_PROFILE_FAILURE:
      return {};
    default:
      return state;
  }
};

export const profile = combineReducers({
  getByUserId,
  createProfile,
  updateProfile,
});
