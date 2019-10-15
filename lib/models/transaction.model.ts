export interface ITransaction {
  id?: string;
  receiverId?: string;
  senderId?: string;
  amount: number;
}
