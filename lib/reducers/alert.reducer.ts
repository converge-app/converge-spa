import {alertConstants} from '../constants/alert.constants';

export const alert = (state: any = {}, action: {type: string, message?: any }) => {
    switch(action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alertSuccess',
                message: action.message,
            }
        case alertConstants.ERROR:
            return {
                type: 'alertDanger',
                message: action.message,
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}
