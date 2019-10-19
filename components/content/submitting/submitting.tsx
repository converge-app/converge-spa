import { makeStyles, LinearProgress, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitActions } from '../../../lib/actions/submit.actions';
import { submitConstants } from '../../../lib/constants/submit.constants';

const useStyles = makeStyles((theme) => ({
  submitting: {
    textAlign: 'center',
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: 'rgba(0,0,0,0)',
    height: 10,
  },
  failure: {
    backgroundColor: theme.palette.error.main,
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  success: {
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  answer: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 5,
  },
}));

const Submitting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { submitting, query, active, message, type } = useSelector(
    (state: any) => state.submitting,
  );

  if (active) {
    if (submitting) {
      return (
        <LinearProgress
          className={classes.submitting}
          color='primary'
          variant={!query ? 'indeterminate' : 'query'}
        ></LinearProgress>
      );
    } else if (!submitting && type === submitConstants.SUCCESS) {
      return (
        <div
          className={classes.success}
          onClick={() => dispatch(SubmitActions.clear())}
        >
          <Typography variant='h5' className={classes.answer}>
            {message.toUpperCase().substr(0, 100)}
          </Typography>
        </div>
      );
    } else if (!submitting && type === submitConstants.FAILURE) {
      return (
        <div
          className={classes.failure}
          onClick={() => dispatch(SubmitActions.clear())}
        >
          <Typography variant='h5' className={classes.answer}>
            {message.toUpperCase().substr(0, 100)}
          </Typography>
        </div>
      );
    }
  }
  return null;
};

export default Submitting;
