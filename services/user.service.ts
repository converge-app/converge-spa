import Axios from 'axios';
import { IUser } from '../lib/models/user.model';

export class UserService {
  public static async getByUserId(userId: string): Promise<IUser> {
    return (await Axios.get(this.url + '/' + userId)).data;
  }
  private static url: string =
    'https://users-service.api.converge-app.net/api/users';
}
