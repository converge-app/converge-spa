import { authHeader } from "../lib/helpers/auth-header";
import axios, { AxiosRequestConfig } from "axios";
import { IMessage } from "../lib/models/message.model";

export class MessageService {
  private static url = "http://localhost:8080/api/chats";

  public static async post(message: IMessage) {
    const requestOptions: AxiosRequestConfig = {
      method: "POST",
      url: this.url,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: message
    };

    return (await axios(requestOptions)).data;
  }

  public static async get(contactId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: "GET",
      url: `${this.url}/contacts/${contactId}`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      }
    };

    return (await axios(requestOptions)).data;
  }
}
