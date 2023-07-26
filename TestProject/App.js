import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Platform } from 'react-native';
import { A } from '@expo/html-elements';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { DataTable } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

import HomeScreen from './Page1';
import FeedbackScreen from './Page2';
//import RootNav from './RootNavigator';


// //Shane: Function to save values to the secure store API
// async function save(key, value) {
//   await SecureStore.setItemAsync(key, value);
// }

// //Shane: function to find values from a given key
// async function getValueFor(key) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     return result;
//   } else {
//     alert('No values stored under that key.');
//   }
// }

const Stack = createNativeStackNavigator();
//Noah Note: Here is where the functionality of our app is coded. All of our notification variables and front-end layout is found here
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Time Select" component={HomeScreen} options={{title: 'Time Select'}}/>
        <Stack.Screen name="Surveys" component={FeedbackScreen} options={{title: 'Surveys'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

