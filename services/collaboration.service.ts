import axios, { AxiosRequestConfig } from "axios";
import { authHeader } from "../lib/helpers/auth-header";

export class CollaborationService {
  private static url: string =
    "https://collaboration-service.api.converge-app.net/api/collaborations";

  public static getByProjectId(projectId: string) {
    const requestOptions: AxiosRequestConfig = {
      method: "GET",
      url: `${this.url}/project/${projectId}`,
      headers: {
        ...authHeader()
      }
    };

    return axios(requestOptions);
  }
}
