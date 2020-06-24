import React from 'react';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';

export const Loader = () => {
    return (
        <View style={styles.loaderContainer}>
            <Image source={require('../assets/logo.png')} style={styles.loaderLogo} />
            <ActivityIndicator />
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loaderLogo: {
        marginBottom: 10,
        height: 80,
        width: 200,
        resizeMode: 'contain',
    },
});
