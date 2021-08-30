import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

import colors from '../styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator
            // screenOptions={{
            //     activeTintColor: colors.green,
            //     tabBarInactiveTintColor: colors.heading,
            //     tabBarLabelPosition: 'beside-icon',
            //     tabBarStyle: {
            //         paddingVertical: 20,
            //         height: 88
            //     }
            // }}
            tabBarOptions={{
                activeTintColor: colors.green,
                inactiveTintColor: colors.heading,
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 88
                }
            }}
        >
            <AppTab.Screen
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={size}
                            color={color} />
                    ))
                }}
            />

            <AppTab.Screen
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color} />
                    ))
                }}
            />
        </AppTab.Navigator>
    );
}

export default AuthRoutes;