import { combineReducers } from 'redux';
import { collaborationConstants } from '../constants/collaboration.constants';
import { IResult } from '../models/result.model';

interface IInitializeState {
  initializing?: boolean;
  initialized?: boolean;
  result: IResult | null;
}

const InitializeInitialState: IInitializeState = {
  initializing: false,
  initialized: false,
  result: null,
};
const initialize = (
  state: IInitializeState = InitializeInitialState,
  action: any,
) => {
  switch (action.type) {
    case collaborationConstants.COLLABORATION_FILES_SUBMIT_REQUEST:
      return {
        initializing: true,
        result: action.result,
      };
    case collaborationConstants.COLLABORATION_FILES_SUBMIT_SUCCESS:
      return {
        initialized: true,
        result: action.result,
      };
    case collaborationConstants.COLLABORATION_FILES_SUBMIT_FAILURE:
      return InitializeInitialState;
    default:
      return state;
  }
};

export const broker = combineReducers({
  initialize,
});
