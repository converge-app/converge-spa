import { combineReducers } from 'redux';
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { bidding } from './bidding.reducer';
import { broker } from './broker.reducer';
import { collaboration } from './collaboration.reducer';
import { payment } from './payment.reducer';
import { profile } from './profile.reducer';
import { project } from './project.reducer';
import { signUp } from './sign-up.reducer';
import { submitting } from './submit.reducer';
import { users } from './user.reducer';

export const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert,
  project,
  bidding,
  collaboration,
  profile,
  submitting,
  payment,
  broker,
});

export default rootReducer;
