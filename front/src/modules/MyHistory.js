import { createAciton } from 'react-redux';
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

export const initialState = {
  isLoading: false,
  isLogin: false,
  loginFailure: false,
  admissionYear: null,
  history: {},
  classnet: null,
  classnetPass: null,
};

export const GET_HISTORY_REQUEST = 'GET_HISTORY_REQUEST';
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS';
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE';

export const getHistory = (id, pw) => async (dispatch) => {
  dispatch({ type: GET_HISTORY_REQUEST });
  const classnet = id;
  const classnetPass = pw;

  try {
    // const res = await api.getUsers();
    const res = await api.getHistory();

    dispatch({
      type: GET_HISTORY_SUCCESS,
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
    }),
    [GET_HISTORY_SUCCESS]: (state) => ({}),
    [GET_HISTORY_FAILURE]: (state) => ({}),
  },
  initialState
);

export default myHistory;
