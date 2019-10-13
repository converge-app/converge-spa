import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../../lib/actions/profile.actions';
import { IProfile } from '../../../../lib/models/profile.model';
import { IUser } from '../../../../lib/models/user.model';
import { UserService } from '../../../../services/user.service';

interface IProps {
  userId: string;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const EditProfileContent: React.FunctionComponent<IProps> = (props: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState<IUser | undefined>();

  const initialProfile: IProfile = useSelector(
    (state: any) => state.profile.getByUserId.profile,
  );
  const [profile, setProfile] = React.useState<IProfile>(initialProfile);

  useEffect(() => {
    dispatch(ProfileActions.getByUserId(props.userId));

    if (initialProfile) {
      getUser(initialProfile.userId);
    }
  }, []);

  const getUser = async (userId: string) => {
    const usr: IUser = await UserService.getByUserId(userId);
    setUser(usr);
  };

  const [, setFiles] = React.useState<File[] | undefined>();
  const handleFileUpload = (filesIn: File[]) => {
    setFiles(filesIn);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (initialProfile) {
        setProfile({ ...profile, profilePictureUrl: e.target.result });
      }
    };
    if (filesIn[0]) {
      reader.readAsDataURL(filesIn[0]);
    }
  };

  if (initialProfile && typeof user !== 'undefined') {
    return (
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h5' color='primary'>
              Profile picture
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='body1'>Avatar</Typography>
            <Avatar
              className={classes.avatar}
              alt='profile picture'
              src={profile.profilePictureUrl}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography variant='body1'>Upload file</Typography>
            <DropzoneArea
              onChange={handleFileUpload}
              acceptedFiles={['image/jpeg', 'image/png']}
              filesLimit={1}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' color='primary'>
              Title
            </Typography>
            <TextField
              label='title'
              placeholder={'Your title'}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                (setProfile({...profile, title: e.target.value}))
              }
            ></TextField>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    if (initialProfile && user == null) {
      getUser(initialProfile.userId);
    }
    return <div>Spinner</div>;
  }
};

export default EditProfileContent;
