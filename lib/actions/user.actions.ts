import Router from 'next/router';
import { userService } from '../../services/user.service';
import { userConstants } from '../constants/user.constants';
import { alertActions } from './alert.actions';

const login = (email: string, password: string) => {
  return (dispatch: any) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
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

    userService.signUp(email, password, firstName, lastName).then(
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
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const getAll = () => {
  return (dispatch: any) => {
    dispatch(request());

    userService
      .getAll()
      .then((users: any) =>
        dispatch(success(users), (error: any) => dispatch(failure(error))),
      );
  };

  function request() {
    return { type: userConstants.GET_ALL_REQUEST };
  }

  function success(users: any) {
    return { type: userConstants.GET_ALL_SUCCESS, users };
  }

  function failure(error: any) {
    return { type: userConstants.GET_ALL_FAILURE, error };
  }
};

export const userActions = {
  login,
  logout,
  signUp,
  getAll,
};
