//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

var moment = require('moment');

//Functions

//Home Screen
const HomeScreen = ({navigation, route}) => {

    let today = moment(); //current date and time
    let day = today.clone().startOf('month'); //first day of the month
    let customDatesStyles = []; //array of dates before today

    // Highlight past dates
    do {
        customDatesStyles.push({
            date: day.clone(),
            style: {backgroundColor: 'grey'},
            textStyle: {color: 'white'},
            allowDisabled: true, // allow custom style to apply to disabled dates
        });
    } while(!(day.add(1, 'day').isSame(today, 'day')));

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <CalendarPicker 
                previousTitle="<"
                nextTitle=">"
                enableDateChange={false}
                dayShape={'square'}
                customDatesStyles={customDatesStyles}
            />
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

export default HomeScreen;