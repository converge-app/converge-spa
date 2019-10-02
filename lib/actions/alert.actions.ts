import {alertConstants} from '../constants/alert.constants';

export const alertActions = {
    success,
    error,
    clear,
};

function success(message: any) {
    return (dispatch: any) => {
        dispatch({ type: alertConstants.SUCCESS, message });
        setTimeout(() => {
            dispatch({type: alertConstants.CLEAR})
        }, 5000)
    }
}

function error(message: any) {
    return (dispatch: any) => {
        dispatch({ type: alertConstants.ERROR, message });
        setTimeout(() => {
            dispatch({type: alertConstants.CLEAR})
        }, 5000)
    }
}

function clear() {
    return { type: alertConstants.CLEAR };
}
