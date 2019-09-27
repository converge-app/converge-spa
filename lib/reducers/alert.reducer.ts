import {alertConstants} from '../constants/alert.constants';

export const alert = (state: any = {}, action: {type: string, message?: any }) => {
    switch(action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}
