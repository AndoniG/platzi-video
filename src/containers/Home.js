import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';
import {SuggestionList} from '../components/SuggestionList';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';
import {useDispatch, useSelector} from 'react-redux';
import * as moviesActions from '../actions/movies';
import * as categoriesActions from '../actions/categories';
import {useFocusEffect} from '@react-navigation/native';

export default () => {
  const dispatch = useDispatch();
  const moviesReducer = useSelector(store => store.moviesReducer);
  const categoriesReducer = useSelector(store => store.categoriesReducer);

  useEffect(() => {
    dispatch(moviesActions.getMovies());
    dispatch(categoriesActions.getCategories(10));
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#70b124');
    }, []),
  );

  if (moviesReducer.loading || categoriesReducer.loading) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#70b124" />
      <Search />
      <CategoryList title={'Categories'} list={categoriesReducer.categories} />
      <SuggestionList title={'For you'} list={moviesReducer.movies} />
    </SafeAreaView>
  );
};
