import axios, { AxiosRequestConfig } from 'axios';

export interface IUser {
  id: string;
  token: string;
}

export const login = (
  email: string,
  password: string,
): Promise<Response> => {
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    url:
      'https://authentication-service.api.converge-app.net/api/authentication/authenticate',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email, password },
  };

  return axios(requestOptions)
    .then(res => res.data)
    .then((user: any) => {
      console.log(user);
      if (user.token) {
        // localStorage.setItem('user', JSON.stringify(user))
        console.log('User logged in');
      }

      return user;
    });
};

export const signUp = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
): Promise<Response> => {
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    url:
      'https://authentication-service.api.converge-app.net/api/authentication/register',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email, password, firstName, lastName },
  };

  return axios(requestOptions)
    .then(res => res.data)
    .then((user: any) => {
      console.log(user);
      if (user.token) {
        // localStorage.setItem('user', JSON.stringify(user))
        console.log('User signed up');
      }

      return user;
    });
};

export const logout = () => {
  console.log('logout called');
  // localStorage.removeItem('user')
};

export const isLoggedIn = () => {
  // return localStorage.getItem('user') != null
};

export const authenticationService = {
  login,
  logout,
  signUp,
};
