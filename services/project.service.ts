import axios, {AxiosPromise, AxiosRequestConfig} from 'axios'
import {authHeader} from '../lib/helpers/auth-header'
import {IProject} from '../lib/models/project.model';
import {services} from './index';

export class ProjectService {

    public static url: string = 'https://projects-service.api.converge-app.net/api/projects';

    public static create(values: IProject): AxiosPromise<any> {
        values.ownerId = services.authentication.getId();

        const requestOptions: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.url}`,
            headers: {
                'Content-Type': 'application/json',
                ...authHeader(),
            },
            data: values,
        }

        return axios(requestOptions)
    }

    public static get(): any {
        return axios.get(`${this.url}`);
    }

    public static async getById(projectId: string) {

        return axios.get(`${this.url}/${projectId}`);
    }
}
