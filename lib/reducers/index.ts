import {combineReducers} from 'redux';
import {alert} from './alert.reducer'
import {authentication} from './authentication.reducer';
import {users} from './user.reducer';

export const rootReducer = combineReducers({
    authentication,
    users,
    alert,
})

export default rootReducer
