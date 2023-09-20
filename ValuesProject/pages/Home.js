//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import CircularProgress from 'react-native-circular-progress-indicator';

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
            <Text> Good Morning, (Name)</Text>
            {/* Calendar */}
            <View style={styles.calendarcontainer}>
            <Text>Daily Check In</Text>
            <CalendarPicker 
                previousTitle="<"
                nextTitle=">"
                enableDateChange={false}
                dayShape={'square'}
                customDatesStyles={customDatesStyles}
                width={300}
            />
            </View>
            {/* Achievements */}
            <View style={styles.overallachievementscontainer}>
            <Text> Upcoming Achievements</Text>
            <View style={styles.achievementscontainer}>
                {/* Need to use a circular status bar for the achievements*/}
                <View style={styles.achievement}>
                    <CircularProgress
                        value={50}
                        radius={40}
                        activeStrokeColor={'#00ff00'}
                        inActiveStrokeColor={'#ff0000'}
                        inActiveStrokeOpacity={0.5}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={10}
                        duration={1000}
                        textStyle={{fontSize: 20}}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                    />
                    <Text> Achievement 1</Text>
                    <Text>Description</Text>
                </View>
                <View style={styles.achievement}>
                    <CircularProgress
                        value={80}
                        radius={40}
                        activeStrokeColor={'#00ff00'}
                        inActiveStrokeColor={'#ff0000'}
                        inActiveStrokeOpacity={0.5}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={10}
                        duration={1000}
                        textStyle={{fontSize: 20}}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                    />
                    <Text> Achievement 2</Text>
                    <Text>Description</Text>
                </View>
                <View style={styles.achievement}>
                    <CircularProgress
                        value={10}
                        radius={40}
                        activeStrokeColor={'#00ff00'}
                        inActiveStrokeColor={'#ff0000'}
                        inActiveStrokeOpacity={0.5}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={10}
                        duration={1000}
                        textStyle={{fontSize: 20}}
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                    />
                    <Text> Achievement 3</Text>
                    <Text>Description</Text>
                </View>
            </View>
            </View>
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
    calendarcontainer: {
        width: '80%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
    overallachievementscontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    achievementscontainer: {
        flex: 2/3,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    achievement: {
        marginLeft: 10,
        marginRight: 10,
    },
});

export default HomeScreen;