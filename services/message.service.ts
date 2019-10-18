import { IMessage } from "../lib/models/message.model";

export class MessageService {
  public static post(message: IMessage) {
    console.log(message);
    const messages: IMessage[] = [
      {
        id: "12",
        senderId:"asdasd",
        message: "hej med dig",
        receiverId: "fsf",
        timestamp:10,
      
      }, {
        id: "12",
        senderId:"asdasd",
        message: "hej med dig",
        receiverId: "fsf",
        timestamp:10,
      
      }, {
        id: "12",
        senderId:"asdasd",
        message: "hej med dig",
        receiverId: "fsf",
        timestamp:10,
      
      }, {
        id: "12",
        senderId:"asdasd",
        message: "hej med dig",
        receiverId: "fsf",
        timestamp:10,
      
      }
    ];

    return messages;
  }
}
