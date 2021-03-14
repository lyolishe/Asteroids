import leaderboardActions from '../actions/leaderboard';

interface BaseActionType {
  type: string,
  data: Record<string, unknown>,
  error: Record<string, unknown>
}

export interface LeaderboardState {
  readonly data: Record<string, unknown> | [];
  readonly loading: boolean;
  readonly error: boolean;
  readonly errorData?: any;
}

export const initialState: LeaderboardState = {
  data: [],
  loading: false,
  error: false,
};
const leaderboardReducer = (state = initialState, action: BaseActionType): LeaderboardState => {
  switch (action.type) {
    case leaderboardActions.requested:
      return {
        data: [],
        loading: true,
        error: false,
      };
    case leaderboardActions.succeeded:
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case leaderboardActions.failed:
      return {
        data: [],
        loading: false,
        error: true,
        errorData: action.error,
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
