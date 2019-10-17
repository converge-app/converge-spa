import { IMessage } from "../models/message.model";
import { messageConstants } from "../constants/message.constants";
import { MesssageService } from "../../services/message.service";

export class MessageActions {
  public static createMessage(
    values: IMessage,
    setSubmitting: (value: boolean) => void
  ) {
    const request = (msg: IMessage) => ({
      type: messageConstants.CREATE_MESSAGE_REQUEST,
      msg
    });

    const success = (msg: IMessage[]) => ({
      type: messageConstants.CREATE_MESSAGE_SUCCESS,
      msg
    });

    const failure = (error: any) => ({
      type: messageConstants.CREATE_MESSAGE_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(values));
      setSubmitting(true);

      try {
        const response = await MesssageService.post(values);
        dispatch(success(msg));
      } catch (error) {
        dispatch(failure(error));
      }
    };
  }
}
