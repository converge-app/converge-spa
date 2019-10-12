import axios from 'axios';

export class ProfileService {
  public static getByUserId(userId: string) {
    return axios.get(this.url + '/user/' + userId);
  }
  private static url: string =
    'https://profiles-service.api.converge-app.net/api/profiles';
}
