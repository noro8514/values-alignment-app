//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//Import Pages

//Functions

//Profile Screen
const ProfileScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            { <Button 
                title="Settings" 
                onPress={() => navigation.navigate('Settings')}
            /> }
            { <Button title="Achievements" onPress={() => navigation.navigate('Achievements')} /> }
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

export default ProfileScreen;