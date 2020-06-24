import React, {useState, useEffect} from 'react';
import {Player} from '../components/Player';
import {StyleSheet, ScrollView, View, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {Suggestion} from '../components/Suggestion';
import {WebView} from 'react-native-webview';

export default () => {
  const moviesReducer = useSelector(store => store.moviesReducer);
  const [opacity] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const makeHTML = id => {
    return `
            <style>
                .video{
                    position:relative;
                    padding-bottom:56.25%;
                }
                iframe{
                    position:absolute;
                    left:0;
                    right:0;
                    top:0;
                    bottom:0;
                    width:100%;
                    height: 100%
                }
            </style>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
  };

  if (moviesReducer.loading) {
    return;
  }

  return (
    <Animated.View style={{flex: 1, opacity}}>
      <ScrollView>
        <Player />
        <Suggestion {...moviesReducer.selectedMovie} />
        <View style={styles.movieTrailer}>
          <WebView
            source={{
              html: makeHTML(moviesReducer.selectedMovie.yt_trailer_code),
            }}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  movieTrailer: {
    height: 200,
    padding: 10,
  },
});
