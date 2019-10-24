import { IMessage } from "../../../lib/models/message.model";

const ReceivingMessage = (props: { message: IMessage }) => {
  const { message } = props;

  return <div>{message.content}</div>;
};

export default ReceivingMessage;
