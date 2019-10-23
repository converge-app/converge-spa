import { IMessage } from "../models/message.model";
import { messageConstants } from "../constants/message.constants";
import { MessageService } from "../../services/message.service";

export class MessageActions {
  public static sendMessage(
    message: IMessage,
    isSubmitting: (value: boolean) => void
  ) {
    const request = (value: IMessage) => ({
      type: messageConstants.SEND_MESSAGES_REQUEST,
      message: value
    });

    const success = (value: IMessage) => ({
      type: messageConstants.SEND_MESSAGES_SUCCESS,
      message: value
    });

    const failure = (error: any) => ({
      type: messageConstants.SEND_MESSAGES_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(message));
      isSubmitting(true);

      try {
        await MessageService.post(message);
        dispatch(success(message));
      } catch (error) {
        dispatch(failure(error));
      }
      isSubmitting(false);
    };
  }

  public static getMessages(contactId: string) {
    const request = (value: string) => ({
      type: messageConstants.GET_MESSAGES_REQUEST,
      contactId: value
    });

    const success = (msg: IMessage[]) => ({
      type: messageConstants.GET_MESSAGES_SUCCESS,
      msg
    });

    const failure = (error: any) => ({
      type: messageConstants.GET_MESSAGES_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(contactId));

      try {
        const messages: IMessage[] = await MessageService.get(contactId);
        dispatch(success(messages));
      } catch (error) {
        dispatch(failure(error));
      }
    };
  }
}
