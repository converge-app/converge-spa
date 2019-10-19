import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
} from '@material-ui/core';
import { lighten } from '@material-ui/core/styles';
import React from 'react';
import { IProject } from '../../../../lib/models/project.model';
import { services } from '../../../../services';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px auto 0',
  },
  linkContainer: {
    padding: theme.spacing(2, 3),
  },
  hover: {
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: lighten(theme.palette.background.default, 0.05),
      boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.25)',
      cursor: 'pointer',
    },
    '&:active': {
      boxShadow: '0.5px 0.5px 4px rgba(0, 0, 0, 0.25)',
    },
  },
}));

const FindOpenProjectsContent: React.FunctionComponent<{
  projects: IProject[];
  category?: string;
  subCategory?: string;
}> = (props: {
  projects: IProject[];
  category?: string;
  subCategory?: string;
}) => {
  const classes = useStyles();
  let filteredProjects: IProject[] | null = props.projects;

  if (props.category && props.subCategory) {
    if (props.projects) {
      filteredProjects = props.projects.filter(
        (project) =>
          project.projectContent.category === props.category &&
          project.projectContent.subCategory === props.subCategory,
      );
    }
  }
  const renderProjects = () => {
    if (filteredProjects) {
      filteredProjects = filteredProjects.filter((project) =>
        project.projectContent.title
          .toLowerCase()
          .includes(searchContent.toLowerCase()),
      );
    }

    const projects = filteredProjects;
    if (projects) {
      return projects.map((item: IProject) => (
        <Grid item xs={12} key={item.id}>
          <div
            onClick={(e) => {
              e.preventDefault();
              Router.push(
                '/projects/open/[projectId]',
                '/projects/open/' + item.id,
                { shallow: true },
              );
            }}
          >
            <Paper className={classes.hover}>
              <Grid container spacing={2} className={classes.linkContainer}>
                <Grid item xs={9}>
                  <Grid
                    container
                    direction={'column'}
                    justify={'space-evenly'}
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <Typography variant='h4' color='primary'>
                        {item.projectContent.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant={'body1'} color='textSecondary'>
                        {item.projectContent.description.substr(0, 100)}...
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid
                    container
                    direction={'column'}
                    justify={'center'}
                    alignItems={'flex-end'}
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <Typography variant={'h6'} color='primary'>
                        {item.projectContent.amount}$
                      </Typography>
                    </Grid>
                    {services.authentication.getId() !== item.ownerId ? (
                      <Grid item xs={12}>
                        <Button variant={'contained'} color={'primary'}>
                          BID
                        </Button>
                      </Grid>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      ));
    }
  };

  const [searchContent, setSearchContent] = React.useState('');

  return (
    <Container maxWidth={'md'} className={classes.container}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Container maxWidth='xs'>
            <TextField
              value={searchContent}
              label='Search'
              fullWidth
              onChange={(e: any) => setSearchContent(e.target.value)}
            ></TextField>
          </Container>
        </Grid>
        {renderProjects()}
      </Grid>
    </Container>
  );
};

export default FindOpenProjectsContent;
