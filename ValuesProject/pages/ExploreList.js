//Imports
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Value } from '../components/MasterClasses';
import {ValueCard} from '../components/MasterComponents';
import {masterValues} from '../components/MasterValues.json';

//Functions

let values = [];

//Map json to values array

//console.log(masterValues[0].title);
for (let i = 0; i < masterValues.length; i++) {
    //console.log(masterValues[i].name);
    //console.log(masterValues[i].description);
    values.push(new Value(masterValues[i].title, masterValues[i].definition));
}


//Explore List Screen
const ExploreListScreen = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <Text>Explore List Screen</Text>
            <ScrollView horizontal={false}>
                {values.map((value) => (
                    <ValueCard Value={value} />
                ))}
            </ScrollView>
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
        padding: 16,
    },
});

export default ExploreListScreen;