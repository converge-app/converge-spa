import axios, { AxiosRequestConfig } from "axios";
import { authHeader } from "../lib/helpers/auth-header";
import { services } from ".";

export class ContactsService {
  private static url = "http://localhost:8080/api/chats"
  public static async get(userId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: "GET",
      url: `${this.url}/contacts/user/${userId}`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: {
        senderId: services.authentication.getId(),
        receiverId: userId
      }
    };

    return (await axios(requestOptions)).data
  }

  public static async addContacts(userId: string) {

    const requestOptions: AxiosRequestConfig = {
      method: "POST",
      url: `${this.url}/contacts`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: {
        senderId: services.authentication.getId(),
        receiverId: userId
      }
    };

    return (await axios(requestOptions)).data
  }
}

