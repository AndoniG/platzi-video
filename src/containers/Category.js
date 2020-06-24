import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {Empty} from '../components/Empty';
import {VerticalSeparator} from '../components/VerticalSeparator';
import {Suggestion} from '../components/Suggestion';
import {useSelector} from 'react-redux';

export default () => {
  const keyExtractor = item => item.id.toString();
  const categoriesReducer = useSelector(store => store.categoriesReducer);

  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Categorias</Text>
      <FlatList
        data={categoriesReducer.categories}
        keyExtractor={keyExtractor}
        ListEmptyComponent={() => <Empty text="No suggestions." />}
        ItemSeparatorComponent={() => <VerticalSeparator />}
        renderItem={({item}) => <Suggestion {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  listTitle: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
