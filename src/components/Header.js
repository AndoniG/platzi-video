import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

export const Header = () => {
  return (
    <View>
      <SafeAreaView style={styles.headerStatusBar}>
        <View style={styles.headerContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain',
  },
  headerStatusBar: {
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  headerRightSection: {
    color: 'white',
  },
});
