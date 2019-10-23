import { IContact } from "../lib/models/contact.model";
import axios, { AxiosRequestConfig } from "axios";
import { authHeader } from "../lib/helpers/auth-header";
import { services } from ".";

export class ContactsService {
  private static url = "localhost:8080/api/chats"
  public static get(userId: string) {
    console.log(userId);
    const contacts: IContact[] = [
      {
        id: "1",
        senderId: "344",
        receiverId: "5432"
      },
      {
        id: "1",
        senderId: "344",
        receiverId: "5432"
      },
      {
        id: "1",
        senderId: "344",
        receiverId: "5432"
      },
      {
        id: "1",
        senderId: "344",
        receiverId: "5432"
      },
      {
        id: "1",
        senderId: "344",
        receiverId: "5432"
      }
    ];

    return contacts;
  }

  public static async addContacts(userId: string) {

    const requestOptions: AxiosRequestConfig = {
      method: "POST",
      url: `${this.url}`,
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

