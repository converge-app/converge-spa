import { BiddingService } from '../../services/bidding.service';
import { bidConstants } from '../constants/bid.constants';
import { IBid } from '../models/bid.model';
import { SubmitActions } from './submit.actions';

export class BidActions {
  public static placeBid(
    values: IBid,
    setSubmitting: (value: boolean) => void,
  ) {
    const request = (bid: IBid) => ({
      type: bidConstants.PLACE_BID_REQUEST,
      bid,
    });
    const success = (bid: IBid) => ({
      type: bidConstants.PLACE_BID_SUCCESS,
      bid,
    });
    const failure = (error: any) => ({
      type: bidConstants.PLACE_BID_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(values));
      setSubmitting(true);
      dispatch(SubmitActions.setSubmitting(true));

      try {
        const response = await BiddingService.post(values);
        const bid: IBid = await response.data;
        dispatch(success(bid));
        setSubmitting(false);
        dispatch(SubmitActions.wasSuccess('BID Placed'));
      } catch (error) {
        setSubmitting(false);
        dispatch(failure(error));
        dispatch(SubmitActions.wasFailure('Failed to place bet'));
      }
    };
  }

  public static getByProject(projectId: string) {
    const request = (values: { projectId: string }) => ({
      type: bidConstants.GET_BY_PROJECT_REQUEST,
      values,
    });
    const success = (bids: IBid[]) => ({
      type: bidConstants.GET_BY_PROJECT_SUCCESS,
      bids,
    });
    const failure = (error: any) => ({
      type: bidConstants.GET_BY_PROJECT_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request({ projectId }));
      dispatch(SubmitActions.setSubmitting(true, true));

      try {
        const response = await BiddingService.getByProjectId(projectId);
        const bids: IBid[] = await response.data;
        dispatch(success(bids));
      } catch (error) {
        dispatch(failure(error));
      }

      dispatch(SubmitActions.setSubmitting(false));
    };
  }

  public static choose(bid: IBid): any {
    const request = (bid: IBid) => ({
      type: bidConstants.CHOOSE_FREELANCER_REQUEST,
      bid,
    });
    const success = () => ({ type: bidConstants.CHOOSE_FREELANCER_SUCCESS });
    const failure = (error: any) => ({
      type: bidConstants.CHOOSE_FREELANCER_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(bid));
      dispatch(SubmitActions.setSubmitting(true));

      try {
        if (await BiddingService.chooseFreelancer(bid)) {
          dispatch(success());
          dispatch(SubmitActions.wasSuccess('Freelancer chosen'));
        } else {
          dispatch(failure("Couldn't choose freelancer"));
        }
      } catch (error) {
        dispatch(failure(error));
        dispatch(SubmitActions.wasFailure("Couldn't choose freelancer"));
      }
    };
  }
}
