import { CollaborationService } from "../../services/collaboration.service";
import { IEvent } from "../models/collaboration.model";
import { collaborationConstants } from "../constants/collaboration.constants";

export class CollaborationActions {
  public static getByProjectId(projectId: string) {
    const request = (projectId: string) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_REQUEST,
      projectId
    });
    const success = (collaboration: IEvent[]) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_SUCCESS,
      collaboration
    });
    const failure = (error: any) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(projectId));

      try {
        const response = await CollaborationService.getByProjectId(projectId);
        const collaboration: IEvent[] = await response.data;
        dispatch(success(collaboration));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  }
}
