import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Platform } from 'react-native';
import { A } from '@expo/html-elements';
import * as Device from 'expo-device';
import Checkbox from 'expo-checkbox';
import { DataTable } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TimeScreen from './Page1';
import FeedbackScreen from './Page2';
import CalendarScreen from './Page3';
import SettingsScreen from './Page4';
//import RootNav from './RootNavigator';


//const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
//Noah Note: Here is where the functionality of our app is coded. All of our notification variables and front-end layout is found here
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { height: 160, width: 100 },
        tabBarStyle: { height: 100, backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen name="Surveys" component={FeedbackScreen} options={{title: 'Surveys',headerTitleStyle:{fontSize:'33',fontWeight:'500', fontFamily: 'Helvetica'}}}/>
        <Tab.Screen name="Calendar" component={CalendarScreen} options={{title: 'Calendar',headerTitleStyle:{fontSize:'33',fontWeight:'500', fontFamily: 'Helvetica'}}}/>
        <Tab.Screen name="Time Select" component={TimeScreen} options={{title: 'Time Select',headerTitleStyle:{fontSize:'33',fontWeight:'500', fontFamily: 'Helvetica'}}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'Survey Settings',headerTitleStyle:{fontSize:'33',fontWeight:'500', fontFamily: 'Helvetica'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

