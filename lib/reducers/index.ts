import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { bidding } from './bidding.reducer';
import { collaboration } from './collaboration.reducer';
import { profile } from './profile.reducer';
import { project } from './project.reducer';
import { signUp } from './sign-up.reducer';
import { users } from './user.reducer';
import { submitting } from './submit.reducer';
import {contacts} from './contacts.reducer';
import {message} from './message.reducer';

export const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert,
  project,
  bidding,
  collaboration,
  contacts,
  message,
  profile,
  submitting,
});

export default rootReducer;
