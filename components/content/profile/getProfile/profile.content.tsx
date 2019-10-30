import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../../lib/actions/profile.actions';
import { IUser } from '../../../../lib/models/user.model';
import { UserService } from '../../../../services/user.service';
import CentralSpinner from '../../../styles/utility/spinner.central';
import { ProfileCard } from './profile.card';

const useStyles = makeStyles(() => ({}));

interface IProps {
  profileId: string;
}

const profileContent: React.FunctionComponent<IProps> = (props: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileActions.getByUserId(props.profileId));

    if (profile) {
      getUser(profile.userId);
    }
  }, []);

  const classes = useStyles();
  console.log(classes);

  const { profile, gotProfile, status } = useSelector(
    (state: any) => state.profile.getByUserId,
  );

  const [user, setUser] = React.useState<IUser | undefined>();

  const getUser = async (userId: string) => {
    const usr: IUser = await UserService.getByUserId(userId);
    setUser(usr);
  };

  const handleEdit = () => {
    Router.push('/profile/edit', '/profile/edit', { shallow: true });
  };

  if (profile && typeof user !== 'undefined') {
    return (
      <Container maxWidth='md'>
        <Grid container>
          <Grid item md={6} xs={12}>
            <ProfileCard profile={profile} user={user} />
          </Grid>
          <Grid item md={6} xs={12}>
            Recent activity
          </Grid>
        </Grid>
        {profile.userId === props.profileId ? (
          <Grid item>
            <Button color='primary' onClick={handleEdit}>
              Edit
            </Button>
          </Grid>
        ) : null}
      </Container>
    );
  } else if (gotProfile == false && status != '') {
    return (
      <Container maxWidth='md'>
        <Grid container>
          <Grid item>
            <Button color='primary' onClick={handleEdit}>
              Create a profile
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    if (profile && user == null) {
      getUser(profile.userId);
    }
    return <CentralSpinner />;
  }
};

export default profileContent;
