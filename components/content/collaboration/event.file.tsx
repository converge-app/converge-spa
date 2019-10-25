import { Avatar, Link, makeStyles, Typography } from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { IEvent } from '../../../lib/models/event.model';
import { IUser } from '../../../lib/models/user.model';
import { UserService } from '../../../services/user.service';
import Spinner from '../../styles/utility/spinner';

interface IEventFile {
  id: string;
  bucketLink: string;
}

const useStyles = makeStyles(theme => ({
  avatar: {
    position: 'relative',
    width: 100,
    height: 100,
    backgroundColor: darken(theme.palette.background.default, 0.3),
  },
  avatarText: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const EventFile = (props: { event: IEvent }) => {
  const classes = useStyles();
  const file: IEventFile = JSON.parse(props.event.content);

  const [user, setUser] = useState<IUser>();

  const getUser = (userId: string) => {
    UserService.getByUserId(userId).then(value => {
      setUser(value);
    });
  };

  useEffect(() => {
    getUser(props.event.ownerId);
  }, []);

  const renderImage = (file: IEventFile) => {
    return (
      <img
        src={file.bucketLink}
        style={{ maxHeight: 100, maxWidth: 100, backgroundColor: 'white' }}
      />
    );
  };

  const renderBlockText = (name: string) => {
    return (
      <Avatar className={classes.avatar}>
        <Typography color='primary' variant='h5' className={classes.avatarText}>
          {name}
        </Typography>
      </Avatar>
    );
  };

  const renderContent = (file: IEventFile) => {
    const extension: string = file.bucketLink.split('.').pop() as string;
    if (
      extension.includes('png') ||
      extension.includes('jpg') ||
      extension.includes('svg')
    ) {
      return renderImage(file);
    } else if (extension.includes('pdf')) {
      return renderBlockText('pdf');
    }
    return (
      <div>
        <Typography color='primary'>Couldn't determine file type</Typography>
        <Typography color='textSecondary'>{file.bucketLink}</Typography>
      </div>
    );
  };

  if (!user) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Typography variant='h6' color='primary'>
        {user.firstName + ' ' + user.lastName}
      </Typography>
      <Link href={file.bucketLink}>{renderContent(file)}</Link>
    </div>
  );
};

export default EventFile;
