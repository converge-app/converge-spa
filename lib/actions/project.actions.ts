import Router from 'next/router';
import { ProjectService } from '../../services/project.service';
import { projectConstants } from '../constants/project.constants';
import { IProject } from '../models/project.model';

export class ProjectActions {
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
      setSubmitting(true);

      try {
        const response = await ProjectService.create(values);
        const project = await response.data;
        dispatch(success(project));
        setSubmitting(false);
        Router.push(`/projects/open/${project.id}`);
      } catch (e) {
        dispatch(failure(e));
        setSubmitting(false);
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

      try {
        const response = await ProjectService.get();
        const projects = await response.data;
        dispatch(success(projects));
        return projects;
      } catch (e) {
        dispatch(failure(e));
      }
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

      try {
        const response = await ProjectService.getById(projectId);
        const project = await response.data;
        dispatch(success(project));
        return project;
      } catch (e) {
        dispatch(failure(e));
      }
    };
  }
}
