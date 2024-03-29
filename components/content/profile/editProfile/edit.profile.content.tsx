import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileActions } from '../../../../lib/actions/profile.actions';
import { authHeader } from '../../../../lib/helpers/auth-header';
import { IProfile } from '../../../../lib/models/profile.model';
import { IUser } from '../../../../lib/models/user.model';
import { services } from '../../../../services';
import { UserService } from '../../../../services/user.service';
import CentralSpinner from '../../../styles/utility/spinner.central';

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
  const [skillInputValue, setSkillInputValue] = React.useState('');
  const [experienceInputValue, setExperienceInputValue] = React.useState('');
  const [newProfile, setNewProfile] = React.useState(false);

  const initialProfile: IProfile = useSelector(
    (state: any) => state.profile.getByUserId.profile,
  );
  const [profile, setProfile] = React.useState<IProfile>(initialProfile);

  useEffect(() => {
    dispatch(ProfileActions.getByUserId(props.userId));

    if (initialProfile) {
      setNewProfile(true);

      setProfile(initialProfile);
      getUser(initialProfile.userId);
    } else {
      const newProfile: IProfile = {
        title: '',
        userId: services.authentication.getId(),
        rating: 0,
        skills: [],
        experience: [],
      };
      setProfile(newProfile);
    }
  }, []);

  const getUser = async (userId: string) => {
    const usr: IUser = await UserService.getByUserId(userId);
    setUser(usr);
  };

  const [files, setFiles] = React.useState<FileList | undefined>();
  const handleFileUpload = (filesIn: FileList | null) => {
    if (filesIn) {
      console.log(filesIn);
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
    }
  };

  const saveChanges = () => {
    if (files) {
      const formData = new FormData();
      formData.append('file', files[0]);
      axios
        .post(
          'https://files-service.api.converge-app.net/api/files',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              ...authHeader(),
            },
          },
        )
        .then(response => {
          const mProfile = profile;
          mProfile.profilePictureUrl = response.data.bucketLink;
          setProfile(mProfile);
        });
    }

    dispatch(
      ProfileActions.update(profile, _ => {
        dispatch(ProfileActions.getByUserId(props.userId));
      }),
    );
  };

  const createProfile = () => {
    dispatch(
      ProfileActions.create(profile, _ => {
        dispatch(ProfileActions.getByUserId(props.userId));
      }),
    );
  };

  if (profile && typeof user !== 'undefined') {
    return (
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h5' color='primary'>
              Profile picture
            </Typography>
          </Grid>
          <Grid item md={2} xs={12}>
            <Typography variant='body1'>Avatar</Typography>
            <Avatar
              className={classes.avatar}
              alt='profile picture'
              src={profile.profilePictureUrl}
            />
          </Grid>
          <Grid item md={10} xs={12}>
            <Typography variant='body1'>Upload file</Typography>
            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='raised-button-file'
              type='file'
              onChange={e => handleFileUpload(e.target.files)}
            />
            <label htmlFor='raised-button-file'>
              <Button variant='contained' component='span'>
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' color='primary'>
              Title
            </Typography>
            <TextField
              label='Title'
              placeholder={'Your title'}
              value={profile.title}
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProfile({ ...profile, title: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' color='primary'>
              Description
            </Typography>
            <TextField
              label='Description'
              placeholder={'Description'}
              value={profile.description}
              rows={8}
              multiline
              fullWidth
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProfile({ ...profile, description: e.target.value })
              }
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' color='primary'>
              Skills
            </Typography>
            {profile.skills.map((skill, index) => (
              <div key={index}>
                <TextField
                  value={skill}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    profile.skills[index] = e.target.value;
                    setProfile({ ...profile, skills: [...profile.skills] });
                  }}
                ></TextField>
              </div>
            ))}
            <TextField
              label='Skill'
              placeholder={'Skill'}
              fullWidth
              value={skillInputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSkillInputValue(e.target.value);
              }}
            ></TextField>
            <Button
              style={{ marginTop: 10 }}
              variant='contained'
              color='primary'
              onClick={() => {
                profile.skills.push(skillInputValue);
                setProfile({
                  ...profile,
                  skills: [...profile.skills],
                });
                setSkillInputValue('');
              }}
            >
              Add Skill
            </Button>
          </Grid>
          <Grid item md={6} xs={12} spacing={3}>
            <Typography variant='h5' color='primary'>
              Experience
            </Typography>
            {profile.experience.map((experience, index) => (
              <div key={index}>
                <TextField
                  value={experience}
                  fullWidth
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    profile.experience[index] = e.target.value;
                    setProfile({
                      ...profile,
                      experience: [...profile.experience],
                    });
                  }}
                ></TextField>
              </div>
            ))}
            <TextField
              label='Experience'
              placeholder={'Experience'}
              fullWidth
              value={experienceInputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setExperienceInputValue(e.target.value);
              }}
            ></TextField>
            <Button
              style={{ marginTop: 10 }}
              variant='contained'
              color='primary'
              onClick={() => {
                profile.experience.push(experienceInputValue);
                setProfile({
                  ...profile,
                  experience: [...profile.experience],
                });
                setExperienceInputValue('');
              }}
            >
              Add Experience
            </Button>
          </Grid>
          <Grid item xs={12}>
            {newProfile ? (
              <Button variant='contained' onClick={saveChanges} color='primary'>
                Save
              </Button>
            ) : (
              <Button
                variant='contained'
                onClick={createProfile}
                color='primary'
              >
                Create
              </Button>
            )}
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

export default EditProfileContent;
