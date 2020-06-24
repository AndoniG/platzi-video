const BASE_URL = 'https://yts.mx/api/v2';
import {GET_CATEGORIES, LOADING, ERROR} from '../types/categoriesTypes';

export const getCategories = id => async dispatch => {
  try {
    dispatch({
      type: LOADING,
    });
    const response = await fetch(`${BASE_URL}/list_movies.json`);
    const {data} = await response.json();
    dispatch({
      type: GET_CATEGORIES,
      payload: data.movies,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: e.message,
    });
  }
};
