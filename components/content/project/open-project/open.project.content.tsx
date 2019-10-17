import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../../lib/actions/profile.actions';
import { IProject } from '../../../../lib/models/project.model';
import { IUser } from '../../../../lib/models/user.model';
import { services } from '../../../../services';
import { UserService } from '../../../../services/user.service';
import { ProfileAvatar } from '../../profile/getProfile/profile.avatar';
import { ProfileName } from '../../profile/getProfile/profile.name';
import OpenProjectBid from './bid/open.project.bid';
import { OpenProjectChooseBid } from './bid/open.project.choose-bid';
import Router from 'next/router';
import { IProfile } from '../../../../lib/models/profile.model';
import CentralSpinner from '../../../styles/utility/spinner.central';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  leftContainer: {},
  rightContainer: {
    borderLeftColor: lighten(theme.palette.background.default, 0.05),
    borderLeftWidth: 1.5,
    borderLeftStyle: 'solid',
  },
  indent: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
  },
}));

interface IProps {
  project: IProject;
}

const OpenProjectContent: React.FunctionComponent<IProps> = (props) => {
  const classes = useStyles();

  const renderFiles = (files: string[] | undefined) => {
    if (files != null && files.length > 0) {
      return (
        <Grid item xs={12}>
          <Typography variant={'h5'} color='primary'>
            files
          </Typography>
          <Typography variant={'body1'} className={classes.indent}>
            {files}
          </Typography>
        </Grid>
      );
    }
  };

  const renderBidding = () => {
    if (props.project.ownerId != null) {
      if (props.project.ownerId === services.authentication.getId()) {
        if (props.project.id) {
          return (
            <Grid item xs={12}>
              <OpenProjectChooseBid
                ownerId={props.project.ownerId}
                projectId={props.project.id}
              />
            </Grid>
          );
        }
      } else {
        if (props.project.id) {
          return (
            <>
              <Grid item xs={12}>
                <OpenProjectBid projectId={props.project.id} />
              </Grid>
              <Grid item xs={12}>
                <OpenProjectChooseBid
                  ownerId={props.project.ownerId}
                  projectId={props.project.id}
                />
              </Grid>
            </>
          );
        }
      }
    }
  };

  return (
    <Container maxWidth={'md'}>
      <Grid container spacing={3}>
        <Grid item xs={8} className={classes.leftContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant={'h4'} color='primary'>
                {props.project.projectContent.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h5'} color='primary'>
                Description
              </Typography>
              <Typography variant={'body1'} className={classes.indent}>
                {props.project.projectContent.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h5'} color='primary'>
                Category
              </Typography>
              <Typography variant={'body1'} className={classes.indent}>
                {props.project.projectContent.category}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={'h5'} color='primary'>
                Sub Category
              </Typography>
              <Typography variant={'body1'} className={classes.indent}>
                {props.project.projectContent.subCategory}
              </Typography>
            </Grid>
            {renderFiles(props.project.projectContent.files)}
            {renderBidding()}
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.rightContainer}>
          <ProfileIntro userId={props.project.ownerId as string}></ProfileIntro>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OpenProjectContent;

export const ProfileIntro = (props: { userId: string }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.userId) {
      dispatch(ProfileActions.getByUserId(props.userId));
      getUser(props.userId);
    }
  }, []);

  const profile: IProfile = useSelector(
    (state: any) => state.profile.getByUserId.profile,
  );

  const [user, setUser] = React.useState<IUser>();

  const getUser = (userId: string) => {
    UserService.getByUserId(userId).then((value) => setUser(value));
  };

  const gotoUser = () => {
    Router.push('/profile/[profileId]', '/profile/' + profile.userId, {
      shallow: true,
    });
  };

  if (user != null && profile != null) {
    return (
      <Grid
        container
        spacing={1}
        alignItems={'center'}
        onClick={() => gotoUser()}
      >
        <Grid item xs={3}>
          <ProfileAvatar profile={profile} />
        </Grid>
        <Grid item xs={9}>
          <ProfileName user={user as IUser} />
        </Grid>
      </Grid>
    );
  } else {
    return <CentralSpinner></CentralSpinner>;
  }
};
