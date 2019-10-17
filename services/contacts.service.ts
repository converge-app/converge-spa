import { IContact } from "../lib/models/contact.model";

export class ContactsService {
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
}
