import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const initialState = {
  info: {},
  loading: true,
  error: false,
};

const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
const GET_INFO_FAILURE = 'GET_INFO_FAILURE';

export const getInfo = () => async (dispatch) => {
  dispatch({ type: GET_INFO_REQUEST });
  try {
    const res = await api.getInfo();
    dispatch({
      type: GET_INFO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_INFO_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const infoContent = handleActions(
  {
    [GET_INFO_REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_INFO_SUCCESS]: (state, action) => ({
      ...state,
      info: { ...action.payload },
      loading: false,
    }),
    [GET_INFO_FAILURE]: (state) => ({
      ...state,
      error: true,
    }),
  },
  initialState
);

export default infoContent;
