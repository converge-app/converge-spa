import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProjectActions } from '../../../../lib/actions/project.actions';
import { services } from '../../../../services';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { IProject } from '../../../../lib/models/project.model';
import { Grid, Typography, Button, Paper, Container } from '@material-ui/core';
import Router from 'next/router';
import CentralSpinner from '../../../styles/utility/spinner.central';

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

const MyProjectsContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProjectActions.getByUserId(services.authentication.getId()));
  }, []);

  const projects = useSelector(
    (state: any) => state.project.getMyProjects.projects,
  );

  if (projects) {
    return (
      <Container maxWidth='md'>
        <Grid container direction='column' spacing={4}>
          {projects.map((item: IProject) => (
            <ProjectComponent project={item}></ProjectComponent>
          ))}
          ;
        </Grid>
      </Container>
    );
  } else {
    return <CentralSpinner />;
  }
};

const ProjectComponent = (props: { project: IProject }) => {
  const classes = useStyles();
  const { project } = props;

  return (
    <Grid item xs={12} key={project.id}>
      <div
        onClick={(e) => {
          e.preventDefault();

          if (project.ownerId === services.authentication.getId()) {
            if (project.freelancerId !== null) {
              Router.push('/project/[projectId]', '/project/' + project.id, {
                shallow: true,
              });
              return;
            }
          } else if (project.freelancerId === services.authentication.getId()) {
            Router.push('/project/[projectId]', '/project/' + project.id, {
              shallow: true,
            });
            return;
          }
          Router.push(
            '/projects/open/[projectId]',
            '/projects/open/' + project.id,
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
                    {project.projectContent.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant={'body1'} color='textSecondary'>
                    {project.projectContent.description.substr(0, 100)}...
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
                    {project.projectContent.amount}$
                  </Typography>
                </Grid>
                {services.authentication.getId() !== project.ownerId ? (
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
  );
};

export default MyProjectsContent;
