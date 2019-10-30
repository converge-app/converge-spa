import Axios, { AxiosRequestConfig } from 'axios';
import { authHeader } from '../lib/helpers/auth-header';
import { IResult } from '../lib/models/result.model';

export class BrokerService {
  public static async submitFiles(result: IResult): Promise<IResult> {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: this.url + '/initialize',
      headers: {
        ...authHeader(),
      },
      data: result,
    };

    return (await Axios(requestOptions)).data;
  }
  private static url: string =
    'https://broker-service.api.converge-app.net/api/broker';
}
