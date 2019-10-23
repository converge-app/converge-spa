import { Container, Grid } from '@material-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollaborationContent from '../../components/content/collaboration/collaboration.content';
import DashboardLayout from '../../components/layouts/dashboard.layout';
import { CollaborationActions } from '../../lib/actions/collaboration.actions';
import { IEvent } from '../../lib/models/event.model';
import React from 'react';
import { ProjectActions } from '../../lib/actions/project.actions';
import { IProject } from '../../lib/models/project.model';
import { ProfileIntro } from '../../components/content/project/open-project/open.project.content';
import CentralSpinner from '../../components/styles/utility/spinner.central';

const CollaborationPage: NextPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof projectId === 'string') {
      dispatch(CollaborationActions.getByProjectId(projectId));
      dispatch(ProjectActions.getById(projectId));
    }
  }, []);

  const collaboration: IEvent[] = useSelector(
    (state: any) => state.collaboration.getByProjectId.collaboration,
  );

  const project: IProject = useSelector(
    (state: any) => state.project.getProject.project,
  );

  if (collaboration && project) {
    console.log(collaboration);
    return (
      <DashboardLayout>
        <Container maxWidth='md'>
          <Grid container spacing={5}>
            <Grid item xs={12} md={9}>
              <CollaborationContent
                collaboration={collaboration}
              ></CollaborationContent>
            </Grid>
            <Grid item xs={12} md={3}>
              <ProfileIntro userId={project.ownerId as string}></ProfileIntro>
            </Grid>
          </Grid>
        </Container>
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

export default CollaborationPage;
