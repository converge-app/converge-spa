import { IBid } from "../lib/models/bid.model";
import axios, { AxiosRequestConfig } from "axios";
import { authHeader } from "../lib/helpers/auth-header";

export class BiddingService {
  public static url: string =
    "https://biddings-service.api.converge-app.net/api/biddings";

  public static async post(bid: IBid) {
    const requestOptions: AxiosRequestConfig = {
      method: "POST",
      url: this.url,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: bid
    };

    return axios(requestOptions);
  }

  public static async getByProjectId(projectId: string) {
    return axios.get(this.url + "/project/" + projectId);
  }

  static chooseFreelancer(bid: IBid) {
    const requestOptions: AxiosRequestConfig = {
      method: "PUT",
      url: `${this.url}/${bid.id}`,
      headers: {
        "Content-Type": "application/json",
        ...authHeader()
      },
      data: bid
    };

    return axios(requestOptions);
  }
}
