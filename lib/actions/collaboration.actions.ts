import { services } from '../../services';
import { CollaborationService } from '../../services/collaboration.service';
import { collaborationConstants } from '../constants/collaboration.constants';
import { IEvent } from '../models/event.model';
import { SubmitActions } from './submit.actions';

export class CollaborationActions {
  public static send(message: string, projectId: string, type: string): any {
    const request = (event: IEvent) => ({
      type: collaborationConstants.COLLABORATION_CREATE_REQUEST,
      event,
    });
    const success = (collaboration: IEvent[]) => ({
      type: collaborationConstants.COLLABORATION_CREATE_SUCCESS,
      collaboration,
    });
    const failure = (error: any) => ({
      type: collaborationConstants.COLLABORATION_CREATE_FAILURE,
      error,
    });

    let event: IEvent | null = null;

    switch (type) {
      case 'message':
        event = {
          projectId,
          type,
          ownerId: services.authentication.getId(),
          content: JSON.stringify({
            message,
          }),
        };
    }

    return async (dispatch: any) => {
      if (event != null) {
        dispatch(request(event));
        dispatch(SubmitActions.setSubmitting());

        try {
          const response = await CollaborationService.create(event);
          const eventRes = await response.data;

          dispatch(success(eventRes));
          dispatch(this.getByProjectId(projectId));
          dispatch(SubmitActions.wasSuccess('Success'));
        } catch (error) {
          dispatch(failure(error));
          dispatch(SubmitActions.wasFailure('Failure, try again.'));
        }
      }
    };
  }

  public static getByProjectId(projectId: string) {
    const request = (projectId: string) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_REQUEST,
      projectId,
    });
    const success = (collaboration: IEvent[]) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_SUCCESS,
      collaboration,
    });
    const failure = (error: any) => ({
      type: collaborationConstants.GET_COLLABORATION_BY_PROJECT_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(projectId));
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const response = await CollaborationService.getByProjectId(projectId);
        const collaboration: IEvent[] = await response.data;
        console.log(collaboration);
        dispatch(success(collaboration));
      } catch (e) {
        dispatch(failure(e));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }
}
