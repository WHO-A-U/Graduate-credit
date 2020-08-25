import { createAction } from 'react-redux';
import { handleActions } from 'redux-actions';
import * as api from '../library/api';

export const initialState = {
  info: {},
  loading: false,
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
      action: res.data,
    });
  } catch (e) {
    console.log('failed');
    dispatch({
      type: GET_INFO_FAILURE,
      action: e,
      error: true,
    });
    throw e;
  }
};

const InfoContent = handleActions(
  {
    [GET_INFO_REQUEST]: (state) => ({
      ...state,
      loading: true,
    }),
    [GET_INFO_SUCCESS]: (state, action) => ({
      ...state,
      info: action.data,
      loading: false,
    }),
    [GET_INFO_FAILURE]: (state, action) => ({
      ...state,
      error: true,
    }),
  },
  initialState
);

export default InfoContent;
