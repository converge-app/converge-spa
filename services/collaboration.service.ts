import axios, { AxiosRequestConfig } from 'axios';
import { authHeader } from '../lib/helpers/auth-header';
import { IEvent } from '../lib/models/event.model';

export class CollaborationService {
  public static create(event: IEvent) {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: this.url,
      headers: {
        ...authHeader(),
      },
      data: event,
    };

    return axios(requestOptions);
  }

  public static getByProjectId(projectId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: 'GET',
      url: `${this.url}/project/${projectId}`,
      headers: {
        ...authHeader(),
      },
    };

    return axios(requestOptions);
  }
  private static url: string =
    'https://collaboration-service.api.converge-app.net/api/collaborations';
}
