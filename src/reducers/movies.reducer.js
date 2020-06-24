import {GET_MOVIES, GET_MOVIE, LOADING, ERROR} from '../types/moviesTypes';

const INITIAL_STATE = {
  movies: [],
  selectedMovie: null,
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: '',
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
        loading: false,
        error: '',
      };
    case LOADING:
      return {...state, loading: true};
    case ERROR:
      return {...state, error: action.payload, loading: false};
    default:
      return state;
  }
};
