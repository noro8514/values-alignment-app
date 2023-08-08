//Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Pages
import ProfileScreen from './Profile';
import SettingsScreen from './Settings';
import AchievementsScreen from './Achievements';

//Functions

//Stack Navigation
const ProfileStack = createNativeStackNavigator();

//This is the nested stack navigation for the profile page to access settings and achievements
//The Profile page is the default page for the Profile section and will link to Achievements and Settings
const ProfileNav = ({navigation, route}) => {
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false,}}/>
        <ProfileStack.Screen name="Settings" component={SettingsScreen} />
        <ProfileStack.Screen name="Achievements" component={AchievementsScreen} />
      </ProfileStack.Navigator>
    );
}

//Styles

export default ProfileNav;