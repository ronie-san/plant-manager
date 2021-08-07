import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import loadAnimation from '../assets/load.json';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Load() {
    return (
        <View style={styles.container}>
            <LottieView source={loadAnimation} autoPlay loop style={styles.animation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }
})