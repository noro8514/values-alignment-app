//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from './Feed';

//Functions

//Ideas from Figma
// Need a possible page for 'Whats Going On' to add Text, image, etc.
// Need a page to show details before posting to FeedScreen
// Need a page for adding values to an experience - different values page from explore that only shows used ones


//New Experience Screen
const NewExperienceScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>New Experience Screen</Text>
        </View>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default NewExperienceScreen;