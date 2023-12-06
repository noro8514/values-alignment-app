//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import CircularProgress from 'react-native-circular-progress-indicator';

var moment = require('moment');

//Home Screen
const HomeScreen = ({navigation, route}) => {

    let today = moment(); //current date and time
    let day = today.clone().startOf('month'); //first day of the month
    let customDatesStyles = []; //array of dates before today

    let name = 'Jane'
    let ach1 = {name: 'Star', description: 'Use 10 days in a row'}
    let ach2 = {name: 'Moon', description: 'Tag one new value'}
    let ach3 = {name: 'Rover', description: 'Tag 30 values'}

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
        <View style={styles.page}>
            <Button
                title="Go to Story"
                onPress={() => navigation.navigate('Story')}
            />

            <Text style={styles.header}> Good Morning,</Text>
            <Text style={styles.name}>{name}</Text>

            {/* Calendar */}
            <Text style={styles.text}>Daily Check In</Text>
            <View style={styles.calendarcontainer}>
                <CalendarPicker 
                    textStyle={{
                        color:'#fff',
                        // fontFamily: 'FONTSPRING DEMO - Greycliff CF Demi Bold',
                    }}
                    previousTitle="<"
                    nextTitle=">"
                    
                    enableDateChange={false}
                    dayShape={'square'}
                    customDatesStyles={customDatesStyles}
                    width={300}
                />
            </View>
            
            {/* Achievements */}
            <Text style={styles.text}> Upcoming Achievements</Text>
            <View style={styles.achievementscontainer}>
                {/* Need to use a circular status bar for the achievements*/}
                <View style={styles.achievement}>
                    <CircularProgress
                        value={50}
                        radius={35}
                        activeStrokeColor={'#009BD6'}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={5}
                        duration={1000}
                    />
                    <Text style={styles.achTitleSide}>{ach1.name}</Text>
                    <Text style={styles.achDescSide}>{ach1.description}</Text>
                </View>
                <View style={styles.achievement}>
                    <CircularProgress
                        value={80}
                        radius={40}
                        activeStrokeColor={'#FFAA00'}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={5}
                        duration={1000}
                    />
                    <Text style={styles.achTitleCenter}>{ach2.name}</Text>
                    <Text style={styles.achDescCenter}>{ach2.description}</Text>
                </View>
                <View style={styles.achievement}>
                    <CircularProgress
                        value={10}
                        radius={35}
                        activeStrokeColor={'#589C5F'}
                        inActiveStrokeWidth={5}
                        activeStrokeWidth={5}
                        duration={1000}
                    />
                    <Text style={styles.achTitleSide}>{ach3.name}</Text>
                    <Text style={styles.achDescSide}>{ach3.description}</Text>
                </View>
            </View>
        </View>
    );
}

//Styles
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontWeight: "400",
        fontSize: 32,
        lineHeight: 40,
        // fontFamily: 'Lexend',
    },
    name: {
        color: '#fff',
        fontWeight: 300,
        // fontFamily: 'OpenSans',
        fontSize: 24,
        lineHeight: 32.68,
    },
    text: {
        color: '#fff',
        // fontFamily: 'Lexend',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 22.5,
        alignSelf: 'flex-start',
    },
    calendarcontainer: {
        width: '80%',
        backgroundColor: '#373636',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
    achievementscontainer: {
        flex: 2/3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    achTitleCenter: {
        color: '#fff',
        // fontFamily: 'Lexend',
        fontWeight: 400,
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
    },
    achDescCenter: {
        color: '#fff',
        // fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 16,
        textAlign: 'center',
    },
    achTitleSide: {
        color: '#fff',
        // fontFamily: 'Lexend',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 22.5,
        textAlign: 'center',
    },
    achDescSide: {
        color: '#fff',
        // fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 10,
        textAlign: 'center',
    },
    achievement: {
        width: 100,
        margin: 10,
        alignItems: 'center',
    },
});
export default HomeScreen;