import { combineReducers } from 'redux';
import { collaborationConstants } from '../constants/collaboration.constants';

const getByProjectId = (state: any = {}, action: any) => {
  switch (action.type) {
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_REQUEST:
      return {
        gettingCollaboration: true,
        projectId: action.projectId,
      };
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_SUCCESS:
      return {
        gotCollaboration: true,
        collaboration: action.collaboration,
      };
    case collaborationConstants.GET_COLLABORATION_BY_PROJECT_FAILURE:
      return {};
    default:
      return state;
  }
};

const createEvent = (state: any = {}, action: any) => {
  switch (action.type) {
    case collaborationConstants.COLLABORATION_CREATE_REQUEST:
      return {
        creatingEvent: true,
        event: action.event,
      };
    case collaborationConstants.COLLABORATION_CREATE_SUCCESS:
      return {
        createdEvent: true,
        event: action.event,
      };
    case collaborationConstants.COLLABORATION_CREATE_FAILURE:
      return {};
    default:
      return state;
  }
};

export const collaboration = combineReducers({
  getByProjectId,
  createEvent,
});
