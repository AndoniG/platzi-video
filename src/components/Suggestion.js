import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {GET_MOVIE} from '../types/moviesTypes';
import {useNavigation} from '@react-navigation/native';

export const Suggestion = ({
  genres,
  title,
  year,
  rating,
  medium_cover_image,
  id,
  yt_trailer_code,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const movieDetail = () => {
    console.log('A navegar');
    dispatch({
      type: GET_MOVIE,
      payload: {
        id,
        genres,
        title,
        year,
        rating,
        medium_cover_image,
        yt_trailer_code,
      },
    });
    navigation.navigate('MovieDetail');
  };

  return (
    <TouchableOpacity onPress={() => movieDetail()}>
      <View style={styles.suggestionContainer}>
        <View style={styles.suggestionVideo}>
          <Image
            style={styles.suggestionCover}
            source={{uri: medium_cover_image}}
          />
          <View style={styles.suggestionGenreContainer}>
            <Text style={styles.suggestionGenreText}>
              {genres ? genres[0] : 'Animated'}
            </Text>
          </View>
        </View>
        <View style={styles.suggestionDescription}>
          <Text style={styles.suggestionTitle}>{title}</Text>
          <Text style={styles.suggestionYear}>{year}</Text>
          <Text style={styles.suggestionRating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  suggestionContainer: {
    flexDirection: 'row',
  },
  suggestionVideo: {},
  suggestionCover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  suggestionGenreContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'black',
  },
  suggestionGenreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  suggestionDescription: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  suggestionTitle: {
    fontSize: 18,
    color: '#44546b',
  },
  suggestionYear: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  suggestionRating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
