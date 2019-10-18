import { messageConstants } from "../constants/message.constants";
import { combineReducers } from "redux";

const sendMessage = (state: any = {}, action: any) => {
  switch (action.type) {
      case messageConstants.SEND_MESSAGE_REQUEST:
          return{
              sendMsg: true,
              msg: action.msg

          }
          case messageConstants.SEND_MESSAGE_SUCCESS:
          return{
              sendMsg: true,
              msg: action.msg

          }
          case messageConstants.SEND_MESSAGE_FAILURE:
                return {};
          
      
  
      default:
          return state
  }
};

const getMessage = (state: any = {}, action: any) => {
    switch (action.type) {
        case messageConstants.GET_MESSAGE_REQUEST:
            return{
                sendMsg: true,
                msg: action.msg
  
            }
            case messageConstants.GET_MESSAGE_SUCCESS:
            return{
                sendMsg: true,
                msg: action.msg
  
            }
            case messageConstants.GET_MESSAGE_FAILURE:
                  return {};
            
        
    
        default:
            return state
    }
  };
export const message = combineReducers({
    sendMessage,
    getMessage
    
  });