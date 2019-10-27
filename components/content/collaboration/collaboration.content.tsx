import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';
import { IEvent } from '../../../lib/models/event.model';
import CreateEvent from './create.event';
import EventType from './event.type';
import { darken } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: darken(theme.palette.background.default, 0.2),
  },
}));

const CollaborationContent = (props: { collaboration: IEvent[] }) => {
  const classes = useStyles();
  const router = useRouter();
  const { projectId } = router.query;

  const collaboration = props.collaboration.sort((a, b) => {
    if (
      typeof a.timestamp !== 'undefined' &&
      typeof b.timestamp !== 'undefined'
    ) {
      return a.timestamp - b.timestamp;
    }
    return 0;
  });

  return (
    <Grid container spacing={3}>
      {collaboration.map((event: IEvent, index: number) => {
        if (typeof event.timestamp !== 'undefined') {
          const date = new Date(event.timestamp * 1000);

          return (
            <React.Fragment key={index}>
              <Grid item xs={2}>
                <Typography>
                  {date
                    .toUTCString()
                    .split(' ')
                    .slice(0, 4)
                    .join(' ')}
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <EventType event={event}></EventType>
              </Grid>
            </React.Fragment>
          );
        }
      })}
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
      <Grid item xs={12}>
        <CreateEvent projectId={projectId as string}></CreateEvent>
      </Grid>
    </Grid>
  );
};

export default CollaborationContent;
