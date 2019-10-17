import { IMessage } from "../lib/models/message.model";

export class MesssageService {
  public static post(userId: string) {
    console.log(userId);
    const messages: IMessage[] = [
      {
        id: "1",
        senderId: "344",
        receiverId: "5432",
        message: "hej med dig"
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

    return messages;
  }
}
