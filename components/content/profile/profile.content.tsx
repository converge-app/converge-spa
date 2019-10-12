import { Avatar, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../lib/actions/profile.actions';
import { IProfile } from '../../../lib/models/profile.model';
import { IUser } from '../../../lib/models/user.model';
import { services } from '../../../services';
import { UserService } from '../../../services/user.service';

const useStyles = makeStyles(() => ({}));

const profileContent: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileActions.getByUserId(services.authentication.getId()));

    if (profile) {
      getUser(profile.userId);
    }
  }, []);

  const classes = useStyles();
  console.log(classes);

  const profile: IProfile = useSelector(
    (state: any) => state.profile.getByUserId.profile,
  );

  const [user, setUser] = React.useState<IUser | undefined>();

  const getUser = async (userId: string) => {
    const usr: IUser = await UserService.getByUserId(userId);
    setUser(usr);
  };

  if (profile && typeof user !== 'undefined') {
    return (
      <Container maxWidth='md'>
        <Grid container>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={2}>
                <Avatar
                  alt='profile picture'
                  src={profile.profilePictureUrl}
                ></Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography variant='h5'>{`${user.firstName} ${user.lastName}`}</Typography>
                <Typography variant='body1'>{profile.title}</Typography>
              </Grid>
              <Grid item>
                {profile.skills.length > 0 ? (
                  <>
                    <Typography variant='h6'>Skills</Typography>
                    <div>
                      {profile.skills.map(skill => (
                        <Typography variant='body2'>{skill}</Typography>
                      ))}
                    </div>
                  </>
                ) : null}
              </Grid>
              <Grid item>
                {profile.experience.length > 0 ? (
                  <>
                    <Typography variant='h6'>Experiences</Typography>
                    <div>
                      {profile.experience.map(experience => (
                        <Typography variant='body2'>{experience}</Typography>
                      ))}
                    </div>
                  </>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            Recent activity
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    if (profile && user == null) {
      getUser(profile.userId)
    }
    return <div>Spinner</div>;
  }
};

export default profileContent;
