import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CollaborationActions } from '../../../lib/actions/collaboration.actions';
import { authHeader } from '../../../lib/helpers/auth-header';
import { renderFileNames } from './event.render-file-names';

export const CreateEvent = (props: { projectId: string }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = React.useState('');

  const sendEvent = () => {
    if (message) {
      dispatch(CollaborationActions.send(message, props.projectId, 'message'));
    }
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
          dispatch(
            CollaborationActions.send(response.data, props.projectId, 'file'),
          );
        });
    }
  };

  const submitFinal = () => {
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
          dispatch(
            CollaborationActions.submitFiles(
              response.data.bucketLink,
              props.projectId,
            ),
          );
        });
    }
  };

  const [files, setFiles] = React.useState<FileList>();
  const handleFileUpload = (filesIn: FileList | null) => {
    if (filesIn) {
      console.log(filesIn);
      setFiles(filesIn);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          variant='outlined'
          label='Message'
          value={message}
          fullWidth
          rows={6}
          multiline
          onChange={e => setMessage(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        {renderFileNames(files)}
      </Grid>
      <Grid item>
        <Button onClick={() => sendEvent()} variant='contained' color='primary'>
          Send
        </Button>
      </Grid>
      <Grid item>
        <input
          style={{ display: 'none' }}
          id='outlined-button-file'
          multiple
          type='file'
          onChange={e => handleFileUpload(e.target.files)}
        />
        <label htmlFor='outlined-button-file'>
          <Button variant='outlined' component='span' color='primary'>
            Upload file
          </Button>
        </label>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => submitFinal()}
        >
          Submit Results
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateEvent;
