import React, { useState } from 'react';
import Video from 'react-native-video';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { PlayerControls } from '../components/PlayerControls';

export const Player = () => {
    const [load, setLoad] = useState(true);
    const [paused, setPaused] = useState(false);

    return (
        <View style={styles.videoContainer}>
            <Video source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4' }}
                style={styles.backgroundVideo} resizeMode="contain" onLoad={() => setLoad(false)} controls={false} paused={paused} />
            {
                load && (
                    <View style={styles.overlay}>
                        <ActivityIndicator black />
                    </View>
                )
            }
            <PlayerControls setPaused={setPaused} paused={paused} />
        </View>
    );
};

var styles = StyleSheet.create({
    videoContainer: {
        paddingTop: '56.25%',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
