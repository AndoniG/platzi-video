import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import * as moviesActions from '../actions/movies';

export const Search = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);

  const handleSubmit = () => {
    dispatch(moviesActions.getMovie(movie));
  };

  return (
    <TextInput
      placeholder="Busca tu película favorita"
      autoCorrect={false}
      autoCapitalize="none"
      onSubmitEditing={handleSubmit}
      onChangeText={text => setMovie(text)}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});
