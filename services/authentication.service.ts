import axios, { AxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';
import { IUser } from '../lib/models/user.model';

export class AuthenticationService {
  public uri: string =
    'https://authentication-service.api.converge-app.net/api/authentication';

  public login(email: string, password: string): Promise<Response> {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.uri}/authenticate`,
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
          Cookie.set('user', JSON.stringify(user));
        }

        return user;
      });
  }

  public signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): Promise<Response> {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.uri}/register`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: { email, password, firstName, lastName },
    };

    return axios(requestOptions)
      .then(res => res.data)
      .then((user: any) => {
        return user;
      });
  }

  public logout(): void {
    console.log('logout called');
    Cookie.remove('user');
  }

  public isLoggedIn(): boolean {
    return Cookie.getJSON('user') != null;
  }

  public getToken(): string {
    const user: IUser = Cookie.getJSON('user');
    if (user && user.token) {
      return user.token;
    } else {
      return '';
    }
  }

  public getId(): string {
    const user: IUser = Cookie.getJSON('user');
    if (user && user.id) {
      return user.id;
    } else {
      return '';
    }
  }
}
