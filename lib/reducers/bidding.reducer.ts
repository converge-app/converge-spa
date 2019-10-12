import { bidConstants } from "../constants/bid.constants";
import { combineReducers } from "redux";

const postBidRequest = (state: any = {}, action: any) => {
  switch (action.type) {
    case bidConstants.PLACE_BID_REQUEST:
      return {
        postingBid: true,
        bid: action.bid
      };
    case bidConstants.PLACE_BID_SUCCESS:
      return {
        postedBid: true,
        bid: action.bid
      };
    case bidConstants.PLACE_BID_FAILURE:
      return {};
    default:
      return state;
  }
};

const getByProjectId = (state: any = {}, action: any) => {
  switch (action.type) {
    case bidConstants.GET_BY_PROJECT_REQUEST:
      return {
        gettingBids: true,
        projectId: action.projectId
      };
    case bidConstants.GET_BY_PROJECT_SUCCESS:
      return {
        gotBids: true,
        bids: action.bids
      };
    case bidConstants.GET_BY_PROJECT_FAILURE:
      return {};
    default:
      return state;
  }
};

const chooseFreelancer = (state: any = {}, action: any) => {
  switch (action.type) {
    case bidConstants.CHOOSE_FREELANCER_REQUEST:
      return {
        choosingFreelancer: true,
        bid: action.bid
      };
    case bidConstants.CHOOSE_FREELANCER_SUCCESS:
      return {
        freelancerChosen: true
      };
    case bidConstants.CHOOSE_FREELANCER_FAILURE:
      return {};
    default:
      return state;
  }
};

export const bidding = combineReducers({
  postBidRequest,
  getByProjectId,
  chooseFreelancer
});
