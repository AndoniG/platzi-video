const BASE_URL = 'https://yts.mx/api/v2';
import {GET_MOVIES, GET_MOVIE, LOADING, ERROR} from '../types/moviesTypes';

export const getMovies = id => async dispatch => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await fetch(`${BASE_URL}/list_movies.json`);
    const {data} = await response.json();
    dispatch({
      type: GET_MOVIES,
      payload: data.movies,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message,
    });
  }
};

export const getMovie = title => async dispatch => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await fetch(
      `${BASE_URL}/list_movies.json?limit=1&sort_by=rating&query_term=${title}`,
    );
    const {data} = await response.json();
    dispatch({
      type: GET_MOVIE,
      payload: data.movies[0],
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message,
    });
  }
};
