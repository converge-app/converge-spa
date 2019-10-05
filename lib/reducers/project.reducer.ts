import {combineReducers} from 'redux';
import {projectConstants} from '../constants/project.constants';

const createProjectRequest = (state: any = {}, action: any) => {
    switch (action.type) {
        case projectConstants.CREATE_PROJECT_REQUEST:
            return {
                creatingProject: true,
                project: action.project,
            };
        case projectConstants.CREATE_PROJECT_SUCCESS:
            return {
                createdProject: true,
                project: action.project,
            };
        case projectConstants.CREATE_PROJECT_FAILURE:
            return {};
        default:
            return state;
    }
}
const getProjects = (state: any = {}, action: any) => {
    switch (action.type) {
        case projectConstants.GET_PROJECTS_REQUEST:
            return {
                gettingProjects: true,
            }
        case projectConstants.GET_PROJECTS_SUCCESS:
            return {
                gotProjects: true,
                projects: action.projects,
            }
        case projectConstants.GET_PROJECTS_FAILURE:
            return {}
        default:
            return state;
    }
}
const getProject = (state: any = {}, action: any) => {
    switch (action.type) {
        case projectConstants.GET_PROJECT_REQUEST:
            return {
                gettingProject: true,
                projectId: action.projectId,
            }
        case projectConstants.GET_PROJECT_SUCCESS:
            return {
                gotProjects: true,
                project: action.project,
            }
        case projectConstants.GET_PROJECT_FAILURE:
            return {}
        default:
            return state;
    }
}

export const project = combineReducers({
    createProjectRequest,
    getProjects,
    getProject,
})
