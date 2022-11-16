import { Types } from "./type";
import { Dispatch } from "react";
import { DispatchAuth } from "./interface/context";
import { AuthPayload } from "./interface/auth";

export const signIn =
  (dispatch: Dispatch<DispatchAuth>) =>
  async (payload: AuthPayload[Types.SingIn]) => {
    const token = {
      accessToken: payload.token.accessToken || "",
      // rtoken: payload.token.rtoken || "",
    };
    const userInfo = payload.userInfo;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    dispatch({
      type: Types.SingIn,
      payload: { token, userInfo },
    });
  };

export const onReLoad = (dispatch: Dispatch<DispatchAuth>) => async () => {};

export const setLoading = (dispatch: Dispatch<DispatchAuth>) => async (payload: AuthPayload[Types.Loading] ) => {  
  dispatch({
    type: Types.Loading,
    payload: { loading:payload.loading },
  });
};

export const signOut = (dispatch: Dispatch<DispatchAuth>) => async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  dispatch({
    type: Types.SingOut,
    payload: {
      token: {
        accessToken: "",
        // rtoken: "",
      },
      userInfo: {
        id: "",
        uuid: "",
        email: "",
        // userName: "";
        password: "",
        role: "",
        assessorType: "",
        sport: "",
      },
    },
  });
};
