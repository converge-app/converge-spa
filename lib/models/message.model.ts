export interface IMessage {
  id?: string;
  senderId: string;
  receiverId: string;
  message: string;
  timestamp: number;
}
