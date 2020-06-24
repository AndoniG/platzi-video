import React from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Category = ({genres, background_image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={{uri: background_image}}
        style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>
          {genres ? genres[0] : 'Animated'}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: 200,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
});
