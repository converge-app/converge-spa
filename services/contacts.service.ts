import axios, { AxiosRequestConfig } from 'axios';
import { services } from '.';
import { authHeader } from '../lib/helpers/auth-header';

export class ContactsService {
  public static async get(userId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: 'GET',
      url: `${this.url}/contacts/user/${userId}`,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      data: {
        senderId: services.authentication.getId(),
        receiverId: userId,
      },
    };

    return (await axios(requestOptions)).data;
  }

  public static async addContacts(userId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url: `${this.url}/contacts`,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
      },
      data: {
        senderId: services.authentication.getId(),
        receiverId: userId,
      },
    };

    return (await axios(requestOptions)).data;
  }
  private static url = 'https://chat-service.api.converge-app.net/api/chats';
}
