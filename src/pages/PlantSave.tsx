import React, { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';
import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { isBefore } from 'date-fns';

interface Params {
    plant: {
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repeat_every: string;
        }
    }
}

export function PlantSave() {
    const route = useRoute();
    const { plant } = route.params as Params;
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');
    const [pickerVisible, setPickerVisible] = useState(false);

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowPicker(false);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰');
        }

        if (dateTime) {
            setSelectedDateTime(dateTime);
        }
    }

    function handleTimePress() {
        setPickerVisible(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150} />
                <Text style={styles.plantName}>{plant.name}</Text>
                <Text style={styles.plantAbout}>{plant.about}</Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage} />
                    <Text style={styles.tipText}>{plant.water_tips}</Text>
                </View>

                <Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado:</Text>

                {
                    pickerVisible &&
                    <DateTimePicker
                        value={selectedDateTime}
                        display="spinner"
                        mode="time"
                        onChange={handleChangeTime}
                    />
                }
                <View style={styles.selectTime}>
                    <RectButton                        
                        onPress={handleTimePress}>
                        <Text style={styles.selectedTime}>{selectedDateTime.toLocaleTimeString()}</Text>
                    </RectButton>
                </View>
                <Button title="Cadastrar planta" onPress={() => { }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },

    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },

    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },

    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },

    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },

    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },

    tipImage: {
        width: 56,
        height: 56
    },

    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },

    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
    },

    selectTime: {
        width: '100%',
        marginBottom: 5,
        paddingHorizontal: 40
    },

    selectedTime: {
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 24,
    }
});