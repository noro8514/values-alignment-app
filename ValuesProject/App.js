//imports for expo/react
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//imports for pages
import HomeScreen from './pages/Home';
import ExploreNav from './pages/ExploreNavigation';
//import ExploreListScreen from './pages/ExploreList';
import NewExperienceScreen from './pages/NewExperience';
import FeedScreen from './pages/Feed';
//import SettingsScreen from './pages/Settings';
//import AchievementsScreen from './pages/Achievements';
import ProfileNav from './pages/ProfileNavigation';
import StoryScreen from './pages/Story';

//Navigation creation, using stacks, bottom tabs, and top tabs
const Tab = createBottomTabNavigator();
//const ProfileStack = createNativeStackNavigator();
//const ExploreTab = createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home1" component={HomeScreen} />
      <HomeStack.Screen name="Story" component={StoryScreen} />
    </HomeStack.Navigator>
  );
}

//This is the root navigation for the app, it contains the bottom tab navigation
//The bottom tab navigation contains the home, explore, new experience, feed, and profile pages
//The home page is the default page and is in home.js
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Explore" component={ExploreNav} />
        <Tab.Screen name="+" component={NewExperienceScreen} options={{headerTitle:" Create New Experience"}}/>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
