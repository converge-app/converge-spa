import Router from 'next/router';
import {services} from '../../services';
import { userConstants } from '../constants/user.constants';
import { alertActions } from './alert.actions';

const login = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(request({ email }));

    services.authentication.login(email, password).then(
      (user: any) => {
        dispatch(success(user));
        dispatch(alertActions.success('Logged in'));
        Router.replace('/dashboard');
      },
      (error: any) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      },
    );
  };

  function request(user: any) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }

  function success(user: any) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }

  function failure(error: any) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

const signUp = (
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
) => {
  const request = (user: any) => {return{
    type: userConstants.SIGN_UP_REQUEST,
    user,
  }};
  const success = (user: any) => {return {
    type: userConstants.SIGN_UP_SUCCESS,
    user,
  }};
  const failure = (error: any) => {
    return {
      type: userConstants.SIGN_UP_FAILURE,
      error,
    }
  };

  return (dispatch: any) => {
    if (password !== confirmPassword) {
      dispatch(failure("Passwords didn't match"));
      dispatch(alertActions.error("Passwords didn't match"));
      return;
    }

    dispatch(request({ email }));

    services.authentication.signUp(email, password, firstName, lastName).then(
      (user: any) => {
        dispatch(success(user));
        dispatch(alertActions.success('Sign up successful!'));
        Router.replace('/login');
      },
      (error: any) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.message));
      },
    );
  };
};

const logout = () => {
  services.authentication.logout();
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout,
  signUp,
};
