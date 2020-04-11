import axios from 'axios';

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAIL,
} from './actionTypes';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
};

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  axios('http://jsonplaceholder.typicode.com/users')
    .then((res) =>
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err.message })
    );
};
