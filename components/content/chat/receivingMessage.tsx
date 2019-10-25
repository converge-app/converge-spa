import { IMessage } from "../../../lib/models/message.model";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(1),
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#0086d4"
  }
}));
const ReceivingMessage = (props: { message: IMessage }) => {
  const classes = useStyles();
  const { message } = props;
  return (
    <div>
      {message.senderId === message.senderId ? (
        <Box display="flex" justifyContent="flex-end" m={1} p={1}>
          <Box p={1} className={classes.box}>
            {message.content}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default ReceivingMessage;
