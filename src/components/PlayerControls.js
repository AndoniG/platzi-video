import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export const PlayerControls = ({ setPaused, paused }) => {

    return (
        <View style={styles.playerControlsContainer}>
            <TouchableHighlight onPress={() => setPaused(!paused)} style={styles.playPauseContainer} hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5,
            }}>
                <Text style={styles.button}>
                    {paused ? 'PLAY' : 'PAUSE'}
                </Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    playerControlsContainer: {
        backgroundColor: 'rgba(255,255,255,.3)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 35,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    playPauseContainer: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    },
    playerPlayPauseButton: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});
