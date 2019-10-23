import axios, { AxiosRequestConfig } from 'axios';
import { services } from '.';
import { authHeader } from '../lib/helpers/auth-header';

export class PaymentsService {
  public static async createStripeAccount(code: string) {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: PaymentsService.url + '/accounts/create',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      data: {
        userId: services.authentication.getId(),
        authorizationCode: code,
      },
    };

    return (await axios(requestOptions)).data;
  }
  public static async withdraw(token: any, amount: number) {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: PaymentsService.url + '/payments/withdraw',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      data: {
        userId: services.authentication.getId(),
        amount: amount * 100,
        cardToken: token,
      },
    };

    return (await axios(requestOptions)).data;
  }

  public static getToken = async (amount: number) => {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: PaymentsService.url + '/payments/deposit',
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      data: {
        userId: services.authentication.getId(),
        amount: amount * 100,
      },
    };

    return (await axios(requestOptions)).data;
  };

  // private static url: string =
  //  'https://payments-service.api.converge-app.net/api';
  private static url: string = 'http://localhost:8080/api';
}
