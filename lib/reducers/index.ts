import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import {project} from './project.reducer';
import { signUp } from './sign-up.reducer';
import { users } from './user.reducer';

export const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert,
  project,
});

export default rootReducer;
