import axios, { AxiosRequestConfig } from "axios";
import { IProfile } from "../lib/models/profile.model";
import { authHeader } from "../lib/helpers/auth-header";

export class ProfileService {
  public static getByUserId(userId: string) {
    return axios.get(this.url + "/user/" + userId);
  }

  public static update(profile: IProfile) {
    const requestOptions: AxiosRequestConfig = {
      method: "PUT",
      url: this.url + `/${profile.id}`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: profile
    };

    return axios(requestOptions);
  }
  public static create(profile: IProfile) {
    const requestOptions: AxiosRequestConfig = {
      method: "POST",
      url: `${this.url}`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: profile
    };

    return axios(requestOptions);
  }

  private static url: string =
    "https://profiles-service.api.converge-app.net/api/profiles";
}
