import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OpenProjectContent from '../../../components/content/project/open-project/open.project.content';
import DashboardLayout from '../../../components/layouts/dashboard.layout';
import { ProjectActions } from '../../../lib/actions/project.actions';
import { IProject } from '../../../lib/models/project.model';
import CentralSpinner from '../../../components/styles/utility/spinner.central';

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof projectId === 'string') {
      dispatch(ProjectActions.getById(projectId));
    }
  }, []);

  const project: IProject = useSelector(
    (state: any) => state.project.getProject.project,
  );

  if (project != null) {
    return (
      <DashboardLayout>
        <OpenProjectContent project={project} />
      </DashboardLayout>
    );
  } else {
    return (
      <DashboardLayout>
        <CentralSpinner></CentralSpinner>
      </DashboardLayout>
    );
  }
};

export default ProjectPage;
