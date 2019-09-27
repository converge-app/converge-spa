import axios, {AxiosRequestConfig} from 'axios'
import {authHeader} from '../lib/helpers/auth-header';

export interface IUser {
    id: string,
    token: string,
}


export const login = (username: string, password: string): Promise<Response> => {
    const requestOptions: AxiosRequestConfig = {
        method: 'POST',
        url: 'https://users-service.api.converge-app.net/api/users/authenticate',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {username, password},
    };

    return axios(requestOptions)
        .then(res => res.data)
        .then((user: any) => {
            console.log(user)
            if (user.token) {
                //localStorage.setItem('user', JSON.stringify(user))
                console.log('User logged in')
            }

            return user
        });
};

export const logout = () => {
    console.log('logout called')
    //localStorage.removeItem('user')
}

export const getAll = () => {
    const requestOptions: { headers: { Authorization: string } | {}; method: string } = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch('https://users-service.api.converge-app.net/api/users', requestOptions)
};

export const isLoggedIn = () => {
    //return localStorage.getItem('user') != null
}


export const userService = {
    login,
    logout,
    getAll,
}
