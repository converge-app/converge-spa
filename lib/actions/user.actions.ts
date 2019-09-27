import Router from 'next/router';
import {userConstants} from '../constants/user.constants';
import {alertActions} from './alert.actions'
import {userService} from '../../services/user.service'

const login = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(request({email}))

        userService.login(email, password)
            .then((user: any) => {
                    dispatch(success(user))
                    Router.replace('/dashboard')
                },
                (error: any) => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error))
                })
    }

    function request(user: any) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user: any) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error: any) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

const logout = () => {
    userService.logout()
    return {type: userConstants.LOGOUT}
}

const getAll = () => {
    return (dispatch: any) => {
        dispatch(request())

        userService.getAll()
            .then((users: any) => dispatch(success(users),
                (error: any) => dispatch(failure(error))))
    }

    function request() {
        return {type: userConstants.GET_ALL_REQUEST}
    }

    function success(users: any) {
        return {type: userConstants.GET_ALL_SUCCESS, users}
    }

    function failure(error: any) {
        return {type: userConstants.GET_ALL_FAILURE, error}
    }
}

export const userActions = {
    login,
    logout,
    getAll,
}
