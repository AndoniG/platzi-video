import React from 'react';
import {FlatList, Text, StyleSheet, ImageBackground} from 'react-native';
import {Empty} from './Empty';
import {HorizontalSeparator} from './HorizontalSeparator';
import {Category} from './Category';
import {useNavigation} from '@react-navigation/native';

export const CategoryList = ({title, list}) => {
  const keyExtractor = item => item.id.toString();
  const navigation = useNavigation();

  const categoryDetail = () => {
    navigation.navigate('Category');
  };

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.listContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={list}
        keyExtractor={keyExtractor}
        horizontal={true}
        ListEmptyComponent={() => <Empty text="No categories." />}
        ItemSeparatorComponent={() => <HorizontalSeparator />}
        renderItem={({item}) => <Category {...item} onPress={categoryDetail} />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  listTitle: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
