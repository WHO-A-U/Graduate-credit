import { createAciton, handleAciton } from 'react-redux';
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
    dispatch({
      type: GET_INFO_FAILURE,
      action: e,
      error: true,
    });
    throw e;
  }
};

const InfoContent = handleAciton({
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
});

export default InfoContent;
