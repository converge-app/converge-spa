import axios, { AxiosRequestConfig } from 'axios';
import { services } from '.';
import { authHeader } from '../lib/helpers/auth-header';

export class PaymentsService {
  public static getToken = async (amount: number) => {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: PaymentsService.url + '/deposit',
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
  private static url: string = 'https://payments-service.api.converge-app.net/api/payments';
}
