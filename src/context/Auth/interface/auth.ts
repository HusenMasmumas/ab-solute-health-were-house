import { Types } from "../type";

export interface Token {
  accessToken: string;
}

export interface UserInfo {
  id: string;
  email: string;
  role: string;
  [key: string]: any;
}
export interface InitialState {
  auth: boolean;
  token: Token;
  userInfo: UserInfo;
  loading:boolean;
}

export type AuthPayload = {
  [Types.SingIn]: {
    token: Token;
    userInfo: UserInfo;
  };
  [Types.OnReLoad]: null | undefined;
  [Types.SingOut]: { token: Token };
  [Types.RefreshTokens]: { token: Token };
  [Types.Loading]: { loading: boolean };
};
