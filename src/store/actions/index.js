import axios from 'axios';
import {
  QUOTE_FAILED,
  QUOTE_REQUESTED,
  QUOTE_RECEIVED,
  QUOTE_FILM,
  QUOTE_TOOGLE_SEARCH,
  QUOTE_VALUE_SEARCH,
} from './types';

const apiUrl = `../../data/films.json`;

export function GetData() {
  return function (dispatch) {
    dispatch({
      type: QUOTE_REQUESTED,
    });
    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: QUOTE_RECEIVED,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: QUOTE_FAILED,
          payload: error,
        })
      );
  };
}

export function GetFilm(id) {
  return {
    type: QUOTE_FILM,
    payload: id,
  };
}

export function ShowSearch() {
  return {
    type: QUOTE_TOOGLE_SEARCH,
  };
}

export function valueSearch(value) {
  return {
    type: QUOTE_VALUE_SEARCH,
    payload: value,
  };
}
