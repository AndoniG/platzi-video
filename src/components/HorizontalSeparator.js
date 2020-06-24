import React from 'react';
import { StyleSheet, View } from 'react-native';

export const HorizontalSeparator = ({ color }) => {
    return (
        <View style={[styles.separatorContainer, { borderTopColor: color || '#eaeaea' }]} />
    );
};

const styles = StyleSheet.create({
    separatorContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
});
