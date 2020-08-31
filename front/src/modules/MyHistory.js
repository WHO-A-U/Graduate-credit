import { handleActions } from "redux-actions";
import * as api from "../lib/api";

export const initialState = {
  isLoading: false,
  isLogined: false,
  loginFailure: false,
  admissionYear: null,
  history: {},
  classnet: null,
  classnetPass: null,
};

export const GET_HISTORY_REQUEST = "GET_HISTORY_REQUEST";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE";

export const getHistory = (id, pw) => async (dispatch) => {
  dispatch({ type: GET_HISTORY_REQUEST });
  const classnet = id;
  const classnetPass = pw;

  try {
    const res = await api.getHistory(classnet, classnetPass);
    console.log(res);
    dispatch({
      type: GET_HISTORY_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_HISTORY_FAILURE,
      data: e,
      error: true,
    });
    throw e;
  }
};

const myHistory = handleActions(
  {
    [GET_HISTORY_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [GET_HISTORY_SUCCESS]: (state, action) => ({
      ...state,
      history: action.payload,
      isLogined: true,
    }),
    [GET_HISTORY_FAILURE]: (state) => ({
      ...state,
      loginFailure: true,
    }),
  },
  initialState
);

export default myHistory;
