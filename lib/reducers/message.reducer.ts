import { messageConstants } from "../constants/message.constants";
import { combineReducers } from "redux";

const getMessages = (state: any = {}, action: any) => {
  switch (action.type) {
    case messageConstants.GET_MESSAGES_REQUEST:
      return {
        sendMsg: true,
        msg: action.msg
      };
    case messageConstants.GET_MESSAGES_SUCCESS:
      return {
        sendMsg: true,
        msg: action.msg
      };
    case messageConstants.GET_MESSAGES_FAILURE:
      return {};

    default:
      return state;
  }
};

const sendMessage = (state: any = {}, action: any) => {
  switch (action.type) {
    case messageConstants.SEND_MESSAGES_REQUEST:
      return {
        sendingMessage: true,
        message: action.message
      };
    case messageConstants.SEND_MESSAGES_SUCCESS:
      return {
        sentMessage: true,
        message: action.message
      };
    case messageConstants.SEND_MESSAGES_FAILURE:
      return {};

    default:
      return state;
  }
};
export const message = combineReducers({
  getMessages,
  sendMessage
});
