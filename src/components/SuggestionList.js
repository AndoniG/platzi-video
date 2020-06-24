import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {Empty} from './Empty';
import {VerticalSeparator} from './VerticalSeparator';
import {Suggestion} from './Suggestion';

export const SuggestionList = ({title, list}) => {
  const keyExtractor = item => item.id.toString();
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>{title}</Text>
      <FlatList
        data={list}
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
