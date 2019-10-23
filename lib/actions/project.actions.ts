import Router from 'next/router';
import { ProjectService } from '../../services/project.service';
import { projectConstants } from '../constants/project.constants';
import { IProject } from '../models/project.model';
import { SubmitActions } from './submit.actions';

export class ProjectActions {
  static getByUserId(userId: string): any {
    const request = (value: string) => ({
      type: projectConstants.GET_MY_PROJECTS_REQUEST,
      userId: value,
    });
    const success = (projects: IProject[]) => ({
      type: projectConstants.GET_MY_PROJECTS_SUCCESS,
      projects,
    });
    const failure = (error: any) => ({
      type: projectConstants.GET_MY_PROJECTS_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(userId));
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const projects: IProject[] = await ProjectService.getByUserId(userId);
        dispatch(success(projects));
      } catch (error) {
        dispatch(failure(error));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }
  public static createProject(
    values: IProject,
    setSubmitting: (value: boolean) => void,
  ) {
    const request = (project: { values: IProject }) => ({
      type: projectConstants.CREATE_PROJECT_REQUEST,
      project,
    });
    const success = (project: { values: IProject }) => ({
      type: projectConstants.CREATE_PROJECT_SUCCESS,
      project,
    });
    const failure = (error: any) => ({
      type: projectConstants.CREATE_PROJECT_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request({ values }));
      dispatch(SubmitActions.setSubmitting(true));
      setSubmitting(true);

      try {
        const response = await ProjectService.create(values);
        const project = await response.data;
        dispatch(success(project));
        setSubmitting(false);
        dispatch(SubmitActions.wasSuccess('Created project'));
        Router.push(
          'projects/open/[projectId]',
          `/projects/open/${project.id}`,
          { shallow: true },
        );
      } catch (e) {
        dispatch(failure(e));
        setSubmitting(false);
        dispatch(SubmitActions.wasFailure('Failed to create project'));
      }
    };
  }

  public static get() {
    const request = () => ({ type: projectConstants.GET_PROJECTS_REQUEST });
    const success = (projects: any) => ({
      type: projectConstants.GET_PROJECTS_SUCCESS,
      projects,
    });
    const failure = (error: any) => ({
      type: projectConstants.GET_PROJECTS_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request());
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const response = await ProjectService.get();
        const projects = await response.data;
        dispatch(success(projects));
      } catch (e) {
        dispatch(failure(e));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }

  public static getOpen() {
    const request = () => ({
      type: projectConstants.GET_OPEN_PROJECTS_REQUEST,
    });
    const success = (projects: any) => ({
      type: projectConstants.GET_OPEN_PROJECTS_SUCCESS,
      projects,
    });
    const failure = (error: any) => ({
      type: projectConstants.GET_OPEN_PROJECTS_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request());

      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const response = await ProjectService.getOpen();
        const projects = await response.data;
        dispatch(success(projects));
      } catch (e) {
        dispatch(failure(e));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }

  public static getById(projectId: string) {
    const request = (project: { projectId: string }) => ({
      type: projectConstants.GET_PROJECT_REQUEST,
      project,
    });
    const success = (project: IProject) => ({
      type: projectConstants.GET_PROJECT_SUCCESS,
      project,
    });
    const failure = (error: any) => ({
      type: projectConstants.GET_PROJECT_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request({ projectId }));
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const response = await ProjectService.getById(projectId);
        const project = await response.data;
        dispatch(success(project));
      } catch (e) {
        dispatch(failure(e));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }
}
