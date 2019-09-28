import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { signUp } from './sign-up.reducer';
import { users } from './user.reducer';

export const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert,
});

export default rootReducer;
