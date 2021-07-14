import produce from "immer";

export interface UserState {
  isLoggingIn: boolean;
  data: {
    nickname: string;
  } | null;
}

export const initialState = {
  // 유저 정보 가져오기
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  // 팔로우
  followLoading: false,
  followDone: false,
  followError: null,
  // 언팔로우
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  // 로그인
  logInLoading: false,
  logInDone: false,
  logInError: null,
  // 로그아웃
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  // 회원가입 시도중
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  // 닉네임 변경 시도중
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,

  me: null,
  signUpData: {},
  loginData: {},
};

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: {
    id: string;
    password: string;
  };
}

export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: {
    userId: number;
    nickname: string;
  };
}
export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}

const dummyUser = ({ data }: UserState) => ({
  ...data,
  nickname: "이현주",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "혀주" },
    { nickname: "hj lee" },
    { nickname: "hjl" },
  ],
  Followers: [
    { nickname: "혀주" },
    { nickname: "hj lee" },
    { nickname: "hjl" },
  ],
});

export const loginRequestAction = (data: {
  id: string;
  password: string;
}): LogInRequestAction => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const user = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      // case UNFOLLOW_SUCCESS:
      //   draft.unfollowLoading = false;
      //   draft.me.Followings = draft.me.Followings.filter(
      //     (v) => v.id !== action.data
      //   );
      //   draft.unfollowDone = true;
      //   break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        // draft.me.Followings.push({ id: action.data });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        // draft.me = dummyUser(action.data);
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        // draft.logOutError = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        // draft.me.Posts.unshift({ id: action.data });
        break;

      // case REMOVE_POST_OF_ME:
      //   draft.me.Posts = draft.me.Posts.filter(
      //     (v: any) => v.id !== action.data
      //   );
      //   break;

      default:
        break;
    }
  });

export default user;
