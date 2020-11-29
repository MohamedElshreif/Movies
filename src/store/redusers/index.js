import {
  QUOTE_FAILED,
  QUOTE_REQUESTED,
  QUOTE_RECEIVED,
  QUOTE_FILM,
  QUOTE_TOOGLE_SEARCH,
  QUOTE_VALUE_SEARCH,
} from '../actions/types';
import { dataFilms } from './division';
const initialState = {
  films: [],
  actors: [],
  tranding: [],
  movies: [],
  tv: [],
  single_film: JSON.parse(localStorage.getItem('item')) || {},
  loading: true,
  error: false,
  showSearch: false,
  filtered: [],
  search: '',
};
export function asyncReducer(state = initialState, { type, payload }) {
  if (type === QUOTE_REQUESTED) {
    return { ...state, status: 'Request' };
  }
  if (type === QUOTE_RECEIVED) {
    return dataFilms(state, payload);
  }
  if (type === QUOTE_FAILED) {
    return { ...state, status: 'Failed', error: true };
  }
  if (type === QUOTE_FILM) {
    const films = [...state.films];
    const creaters = [...state.actors];
    const [film] = films.filter((film) => payload === film.id);
    const single_film = { ...film, creaters: [...creaters] };
    localStorage.setItem('item', JSON.stringify(single_film));
    return {
      ...state,
      single_film: { ...state.single_film, ...single_film },
    };
  }
  if (type === QUOTE_TOOGLE_SEARCH) {
    return { ...state, showSearch: !state.showSearch };
  }
  if (type === QUOTE_VALUE_SEARCH) {
    const films = [...state.films];
    const filmsLowerCase = films.map((film) => {
      return { ...film, name: film.name.toLowerCase() };
    });
    const filtered = filmsLowerCase.filter((film) =>
      payload !== '' ? film.name.includes(payload.toLowerCase()) : false
    );
    return { ...state, filtered, search: payload };
  }
  return state;
}
