import { IMessage } from "../models/message.model";
import { messageConstants } from "../constants/message.constants";
import { MessageService } from "../../services/message.service";



export class MessageActions {
  public static sendMessage(
  message:any
  ) {
    const request = (value: string) => ({
      type: messageConstants.SEND_MESSAGE_REQUEST,
      message: value
    });

    const success = (msg: IMessage[]) => ({
      type: messageConstants.SEND_MESSAGE_SUCCESS,
      msg
    });

    const failure = (error: any) => ({
      type: messageConstants.SEND_MESSAGE_FAILURE,
      error
    });

    return async (dispatch: any) => {
      dispatch(request(message));
  

      try {
        const response = MessageService.post(message);
        dispatch(success(response));
     
      } catch (error) {
     
        dispatch(failure(error));
      }
    };
  }


public static getMessage(message: any){

  const request = (value: string) => ({
    type: messageConstants.GET_MESSAGE_REQUEST,
    message: value
  });

  const success = (msg: IMessage[]) => ({
    type: messageConstants.GET_MESSAGE_SUCCESS,
    msg
  });

  const failure = (error: any) => ({
    type: messageConstants.GET_MESSAGE_FAILURE,
    error
  });

  return async (dispatch: any) => {
    dispatch(request(message));


    try {
      const response = MessageService.post(message);
      dispatch(success(response));
   
    } catch (error) {
   
      dispatch(failure(error));
    }
  
}}



}