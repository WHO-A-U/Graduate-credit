import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

export const initialState = {
  isLoading: false,
  isLogined: false,
  loginFailure: false,
  admissionYear: null,
  history: {},
};

export const GET_HISTORY_REQUEST = 'GET_HISTORY_REQUEST';
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS';
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const getHistory = (id, pw, year) => async (dispatch) => {
  dispatch({ type: GET_HISTORY_REQUEST });
  try {
    const res = await api.getHistory(id, pw);
    if (res.data === 'fail') {
      const err = Error('login_fail');
      throw err;
    }
    dispatch({
      type: GET_HISTORY_SUCCESS,
      payload: res.data,
      admissionYear: year,
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
      isLoading: false,
      isLogined: true,
      admissionYear: action.admissionYear,
      history: action.payload,
    }),
    [GET_HISTORY_FAILURE]: (state) => ({
      ...state,
      loginFailure: true,
      isLoading: false,
    }),
    [LOGIN_FAIL]: (state) => ({
      ...state,
      loginFailure: false,
    }),
  },
  initialState
);

export default myHistory;
