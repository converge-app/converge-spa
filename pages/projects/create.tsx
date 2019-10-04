import {NextPage} from 'next';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import CreateProjectContent from '../../components/content/project/create-project/create.project.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';
import {ProjectActions} from '../../lib/actions/project.actions';
import {IProject} from '../../lib/models/project.model';

const CreateProjectPage: NextPage = ({createProject}: any) => {

    return <DashboardLayout>
        <CreateProjectContent submitCreateProject={((values, setSubmitting) => {
            const project: IProject = {
                projectContent: values,
            }
            createProject(project, setSubmitting);
        })}/>
    </DashboardLayout>;
};

const mapDispatchToProps = (dispatch: any) => ({
    createProject: (project: IProject, setSubmitting: (value: boolean) => void) => {
        dispatch(ProjectActions.createProject(project, setSubmitting))
    }
})

export default compose(
    connect(null, mapDispatchToProps)(CreateProjectPage),
);
