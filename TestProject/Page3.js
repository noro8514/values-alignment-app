import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

var moment = require('moment');

//Test Calendar Screen
const CalendarScreen = () => {

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
        <CalendarPicker 
            previousTitle="<"
            nextTitle=">"
            enableDateChange={false}
            dayShape={'square'}
            customDatesStyles={customDatesStyles}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 20,
    },
  });

export default CalendarScreen