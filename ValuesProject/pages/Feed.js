//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Functions

//Feed Screen
const FeedScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
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

export default FeedScreen;