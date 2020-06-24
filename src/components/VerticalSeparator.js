import React from 'react';
import { StyleSheet, View } from 'react-native';

export const VerticalSeparator = ({ color }) => {
    return (
        <View style={[styles.separatorContainer, { borderTopColor: color || '#eaeaea' }]} />
    );
};

const styles = StyleSheet.create({
    separatorContainer: {
        borderTopWidth: 1,
    },
});
