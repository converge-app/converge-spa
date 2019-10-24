import { IMessage } from "../../../lib/models/message.model";
import { Chip } from "@material-ui/core";

const SentMessage = (props: { message: IMessage }) => {
  const { message } = props;

  return (
    <div>
      <Chip label={message.content} />
    </div>
  );
};

export default SentMessage;
