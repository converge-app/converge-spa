import Router from 'next/router';
import {services} from '../../services';

export const authHeader = () => {
    if (services.authentication.isLoggedIn()) {
        return {Authorization: 'Bearer ' + services.authentication.getToken()}
    } else {
        Router.push('/login')
    }
};
