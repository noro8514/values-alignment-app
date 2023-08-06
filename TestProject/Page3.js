import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

//Test Calendar Screen
const CalendarScreen = () => {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const startDate = selectedStartDate
        ? selectedStartDate.format('YYYY-MM-DD').toString()
        : '';

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <CalendarPicker onDateChange={setSelectedStartDate} />
      </View>
    );
  };

  const styles = StyleSheet.create({
  });

export default CalendarScreen