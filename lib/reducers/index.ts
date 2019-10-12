import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { bidding } from "./bidding.reducer";
import { project } from "./project.reducer";
import { signUp } from "./sign-up.reducer";
import { users } from "./user.reducer";

export const rootReducer = combineReducers({
  authentication,
  signUp,
  users,
  alert,
  project,
  bidding
});

export default rootReducer;
