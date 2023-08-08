//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Functions

//Explore Space Screen
const ExploreSpaceScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Explore Space Screen</Text>
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

export default ExploreSpaceScreen;