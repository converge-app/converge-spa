export interface IMessage {
  id?: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp?: number;
}
