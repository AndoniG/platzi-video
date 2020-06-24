import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Empty = ({ text }) => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyMessage}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        padding: 10,
    },
    emptyMessage: {
        fontSize: 16,
    },
});
