import { collaborationConstants } from "../constants/collaboration.constants";
import { combineReducers } from "redux";

const getByProjectId = (state: any = {}, action: any) => {
  switch (action.type) {
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_REQUEST:
      return {
        gettingCollaboration: true,
        projectId: action.projectId
      };
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_SUCCESS:
      return {
        gotCollaboration: true,
        collaboration: action.collaboration
      };
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_FAILURE:
      return {};
    default:
      return state;
  }
};

export const collaboration = combineReducers({
  getByProjectId
});
