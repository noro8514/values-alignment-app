//Imports
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Pages
import ExploreListScreen from './ExploreList';
import ExploreSpaceScreen from './ExploreSpace';

//Functions

//Material Top Navigation
const ExploreTab = createMaterialTopTabNavigator();

//This is the nested tab navigation for the explore page to access the space view and list view
//The space view is the default page for the Explore section and will link to ExploreList
const ExploreNav = ({navigation, route}) => {
    return (
      <ExploreTab.Navigator>
        <ExploreTab.Screen name="Space View" component={ExploreSpaceScreen} />
        <ExploreTab.Screen name="List View" component={ExploreListScreen} />
      </ExploreTab.Navigator>
    );
}

//Styles

export default ExploreNav;