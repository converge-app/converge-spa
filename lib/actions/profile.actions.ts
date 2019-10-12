import { ProfileService } from '../../services/profile.service';
import { profileConstants } from '../constants/profile.constants';
import { IProfile } from '../models/profile.model';

export class ProfileActions {
  public static getByUserId(userId: string) {
    const request = (userId: string) => ({
      type: profileConstants.GET_BY_USER_REQUEST,
      userId,
    });
    const success = (profile: IProfile) => ({
      type: profileConstants.GET_BY_USER_SUCCESS,
      profile,
    });
    const failure = (error: any) => ({
      type: profileConstants.GET_BY_USER_FAILURE,
      error,
    });

    return async (dispatch: any) => {
      dispatch(request(userId));

      try {
        const response = await ProfileService.getByUserId(userId);
        const profile = await response.data;
        dispatch(success(profile));
      } catch (error) {
        dispatch(failure(error));
      }
    };
  }
}
