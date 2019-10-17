import { Link, Grid, Container, List, ListItem } from '@material-ui/core';
import React from 'react';
import NormalLink from '../../styles/links/link.normal';

const DashboardContent: React.FunctionComponent = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <NormalLink href={'/projects/create'}>
                <Link>Create a Project</Link>
              </NormalLink>
            </ListItem>
            <ListItem>
              <NormalLink href={'/categories'}>
                <Link>Find a Project</Link>
              </NormalLink>
            </ListItem>
            <ListItem>
              <NormalLink href={'/projects/mine'}>
                <Link>My projects</Link>
              </NormalLink>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={6} xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContent;
