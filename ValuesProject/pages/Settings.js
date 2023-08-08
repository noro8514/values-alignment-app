//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Functions

//Settings Screen
const SettingsScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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

export default SettingsScreen;