import { combineReducers } from 'redux';
import moviesReducer from './movies.reducer';
import categoriesReducer from './categories.reducer';


export default combineReducers({
  moviesReducer,
  categoriesReducer,
});
