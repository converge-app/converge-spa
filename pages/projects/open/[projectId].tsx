import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import OpenProjectContent from '../../../components/content/project/open-project/open.project.content';
import DashboardLayout from '../../../components/layouts/dashboard.layout';
import {ProjectActions} from '../../../lib/actions/project.actions';

const ProjectPage: NextPage = ({getProject}: any) => {

    const router = useRouter();
    const {projectId} = router.query;
    getProject(projectId);
    return <DashboardLayout>
        <OpenProjectContent projectId={''}/>
    </DashboardLayout>;
};

const mapStateToProps = (state: any) => {
    const {project} = state
    return {project}
}

const mapDispatchToProps = (dispatch: any) => ({
    getProject: (projectId: string) => {
        dispatch(ProjectActions.getById(projectId))
    }
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)(ProjectPage),
);
