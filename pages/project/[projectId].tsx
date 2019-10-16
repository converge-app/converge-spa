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

const CollaborationPage: NextPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof projectId === 'string') {
      dispatch(CollaborationActions.getByProjectId(projectId));
    }
  }, []);

  const collaboration: IEvent[] = useSelector(
    (state: any) => state.collaboration.getByProjectId.collaboration,
  );

  if (collaboration) {
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
              Profile
            </Grid>
          </Grid>
        </Container>
      </DashboardLayout>
    );
  } else {
    return <DashboardLayout>Spinner</DashboardLayout>;
  }
};

export default CollaborationPage;
