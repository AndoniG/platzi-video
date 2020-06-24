import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { GET_MOVIE } from '../types/moviesTypes';

export const Close = () => {
    const dispatch = useDispatch();

    const closeVideo = () => {
        dispatch({
            type: GET_MOVIE,
            payload: null,
        });
    };

    return (
        <TouchableOpacity onPress={() => closeVideo()} style={styles.closeContainer}>
            <Text style={styles.button}>X</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        color: 'black',
    },
    closeContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

