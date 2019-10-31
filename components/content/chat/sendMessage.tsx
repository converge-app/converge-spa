import { Box, makeStyles } from '@material-ui/core';
import { IMessage } from '../../../lib/models/message.model';

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(1),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    color: '#000',
  },
}));
const SentMessage = (props: { message: IMessage }) => {
  const classes = useStyles();
  const { message } = props;

  return (
    <div>
      {message.receiverId === message.receiverId ? (
        <Box display='flex' justifyContent='flex-start'>
          <Box className={classes.box}>{message.content}</Box>
        </Box>
      ) : (
        ''
      )}
    </div>
  );
};

export default SentMessage;
