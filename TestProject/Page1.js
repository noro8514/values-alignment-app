import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform, Pressable } from 'react-native';
import { A } from '@expo/html-elements';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


//Shane: Function to  1. Convert time to 24 Hour format and split to hours and minutes,
//2. Set the scheduled time to desired time using the converted string
//3. Use the scheduleNotification function to schedule the notification at that desired time
async function scheduleNotificationAtTime(hour,minute,day, timeNum) {
    //Convert time to hours (24 hour format), and minutes (Hoping time is in format like 7:00 pm or 5:35 am)
    thisHour = parseInt(hour);
    thisMinute = parseInt(minute);
  
  
    //Checks for if time is AM or PM
    if (day === 'pm' && thisHour !== 12) {
      thisHour += 12;
    } else if (day === 'am' && thisHour === 12) {
      thisHour = 0;
    }
  

    //Schedule the notification using the desired time
    if(timeNum === 1){
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Morning Survey",
        body: 'Time to take your morning survey!',
      },
      trigger: {
        hour: thisHour,
        minute: thisMinute,
        repeats: true,
      },
    });
  }
  else if(timeNum === 2){
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Afternoon Survey",
        body: 'Time to take your afternoon survey!',
      },
      trigger: {
        hour: thisHour,
        minute: thisMinute,
        repeats: true,
      },
    });
  }
  else{
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Evening Survey",
        body: 'Time to take your evening survey!',
      },
      trigger: {
        hour: thisHour,
        minute: thisMinute,
        repeats: true,
      },
    });
  }
  console.log("Notif Scheduled at " + thisHour + ":" + thisMinute);
}
  
  
  
  Notifications.cancelAllScheduledNotificationsAsync();
  
  /*Noah Note: This handler determines how the app will handle a notification if the app is currently open. It takes in the incoming 
  notification as an arugment. 
  */
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  
  /*Noah Note: This function is important as it is required to gain notification permissions fron the user's device. This function is how
  our mobile devices know to show us a pop-up saying "Allow Notifications from this app?"
  */
  async function registerForPushNotificationsAsync() {
    let token;
    /*Noah Note: This if statement checks to see if the app is being run on a mobile device, then runs getPermissionsAsync to ask the user
    if we may send them notifications. For our project, we NEED permission so maybe we say close the app if we don't get permission? 
    */
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    //Noah Note: If the device is an android device, it will require a few extra set ups as seen below
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

//First 'Home' Page with time select options
const TimeScreen = ({navigation, route}) => {
    //For Notifications
    //const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    const [Survey1, setSurvey1] = useState(false);
    const [Survey2, setSurvey2] = useState(false);
    const [Survey3, setSurvey3] = useState(false);

    // const [Survey1Link, setSurvey1Link] = useState('');
    // const [Survey2Link, setSurvey2Link] = useState('');
    // const [Survey3Link, setSurvey3Link] = useState('');

    // useEffect(() => {
    //   const loadData = async () => {
    //     //Load the survey values
    //       const RetrievedSurvey1 = await SecureStore.getItemAsync('Survey1');
    //       setSurvey1(JSON.parse(RetrievedSurvey1));
    //       //console.log(Survey1);

    //       const RetrievedSurvey2 = await SecureStore.getItemAsync('Survey2');
    //       setSurvey2(JSON.parse(RetrievedSurvey2));
    //       //console.log(Survey2);

    //       const RetrievedSurvey3 = await SecureStore.getItemAsync('Survey3');
    //       setSurvey3(JSON.parse(RetrievedSurvey3));

    //   };
    //   loadData();
    // }, []);

    //function to load the survey links and values from secure storage and save to useable variables
    useFocusEffect(
      React.useCallback(() => {
        const loadData = async () => {
        //Load the survey values
          const RetrievedSurvey1 = await SecureStore.getItemAsync('Survey1');
          setSurvey1(JSON.parse(RetrievedSurvey1));
          //console.log(Survey1);

          const RetrievedSurvey2 = await SecureStore.getItemAsync('Survey2');
          setSurvey2(JSON.parse(RetrievedSurvey2));
          //console.log(Survey2);

          const RetrievedSurvey3 = await SecureStore.getItemAsync('Survey3');
          setSurvey3(JSON.parse(RetrievedSurvey3));
          //console.log(Survey3);

        //Load the survey links
        //   const SavedLink1 = await SecureStore.getItemAsync('Survey1Link');
        //   setSurvey1Link(SavedLink1);
        // //console.log(Survey1Link);

        //   const SavedLink2 = await SecureStore.getItemAsync('Survey2Link');
        //   setSurvey2Link(SavedLink2);

        //   const SavedLink3 = await SecureStore.getItemAsync('Survey3Link');
        //   setSurvey3Link(SavedLink3);
        };
      loadData();
      } , [])
    );

    //const {Survey1, Survey2, Survey3} = route.params || {};

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);

    // Noah put consts here
    const [hourOpen1, setHourOpen1] = useState(false);
    const [hour1, setHour1] = useState(null);
    const [hours, setHours] = useState([
      {label:'1', value:'1'},
      {label:'2', value:'2'},
      {label:'3', value:'3'},
      {label:'4', value:'4'},
      {label:'5', value:'5'},
      {label:'6', value:'6'},
      {label:'7', value:'7'},
      {label:'8', value:'8'},
      {label:'9', value:'9'},
      {label:'10', value:'10'},
      {label:'11', value:'11'},
      {label:'12', value:'12'},
    ]);
  
  
    const [minuteOpen1, setMinuteOpen1] = useState(false);
    const [minute1, setMinute1] = useState(null);
    const [minutes, setMinutes] = useState([
      {label:'00', value:'00'},
      {label:'05', value:'05'},
      {label:'10', value:'10'},
      {label:'15', value:'15'},
      {label:'20', value:'20'},
      {label:'25', value:'25'},
      {label:'30', value:'30'},
      {label:'35', value:'35'},
      {label:'40', value:'40'},
      {label:'45', value:'45'},
      {label:'50', value:'50'},
      {label:'55', value:'55'},
    ]);
  
  
    const [timeOpen1, setTimeOpen1] = useState(false);
    const [time1, setTime1] = useState(null);
    const [times, setTimes] = useState([
      {label:'am', value:'am'},
      {label:'pm', value:'pm'},
    ]);
  
  
    const [hourOpen2, setHourOpen2] = useState(false);
    const [hour2, setHour2] = useState(null);
    const [hourOpen3, setHourOpen3] = useState(false);
    const [hour3, setHour3] = useState(null);
    const [minuteOpen2, setMinuteOpen2] = useState(false);
    const [minute2, setMinute2] = useState(null);
    const [minuteOpen3, setMinuteOpen3] = useState(false);
    const [minute3, setMinute3] = useState(null);
    const [timeOpen2, setTimeOpen2] = useState(false);
    const [time2, setTime2] = useState(null);
    const [timeOpen3, setTimeOpen3] = useState(false);
    const [time3, setTime3] = useState(null);

    return ( 
        <View style={styles.container}>
     
        {/* Shane's Code for Time Inputs */}
        {/* Has three inputs for user to put in strings, each one is connected to each value */}
        {/* Noah Redid To Use DropDown Inputs */}
        <Text style={styles.title}>Enter Times You Would Like to Recieve Notifications:</Text>
        <Text style={styles.subtitle}>Go to Settings to Configure Surveys</Text>

        {Survey1 && (
          <View style={styles.Morning}>
            <Text style={styles.threeSurveys}>Morning Survey</Text>
        <View style={styles.morningDropdowns}>
        {/*Dropdown menus for time 1*/}
        <DropDownPicker
        open = {hourOpen1}
        value={hour1}
        items={hours}
        setOpen={setHourOpen1}
        setValue={setHour1}
        containerStyle={
          {
            width:100,
            zIndex:9000,
            zIndexInverse:1000,
          }
        }
        />
        <DropDownPicker
        open = {minuteOpen1}
        value={minute1}
        items={minutes}
        setOpen={setMinuteOpen1}
        setValue={setMinute1}
        zIndex={8000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        <DropDownPicker
        open = {timeOpen1}
        value={time1}
        items={times}
        setOpen={setTimeOpen1}
        setValue={setTime1}
        zIndex={7000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        </View>
        </View>
        )}

        {Survey2 && (
          <View style={styles.Afternoon}>
          <Text style={styles.threeSurveys}>Afternoon Survey</Text>
        <View style={styles.afternoonDropdowns}>
        {/*Dropdown menus for time 2*/}
        <DropDownPicker
        open = {hourOpen2}
        value={hour2}
        items={hours}
        setOpen={setHourOpen2}
        setValue={setHour2}
        zIndex={6000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        <DropDownPicker
        open = {minuteOpen2}
        value={minute2}
        items={minutes}
        setOpen={setMinuteOpen2}
        setValue={setMinute2}
        zIndex={5000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        <DropDownPicker
        open = {timeOpen2}
        value={time2}
        items={times}
        setOpen={setTimeOpen2}
        setValue={setTime2}
        zIndex={4000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        </View>
          </View>
        )}

        {Survey3 && (
          <View style={styles.Evening}>
            <Text style={styles.threeSurveys}>Evening Survey</Text>
        <View style={styles.eveningDropdowns}>
        {/*Dropdown menus for time 3*/}
        <DropDownPicker
        open = {hourOpen3}
        value={hour3}
        items={hours}
        setOpen={setHourOpen3}
        setValue={setHour3}
        zIndex={3000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        <DropDownPicker
        open = {minuteOpen3}
        value={minute3}
        items={minutes}
        setOpen={setMinuteOpen3}
        setValue={setMinute3}
        zIndex={2000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        <DropDownPicker
        open = {timeOpen3}
        value={time3}
        items={times}
        setOpen={setTimeOpen3}
        setValue={setTime3}
        zIndex={1000}
        containerStyle={
          {
            width:100,
          }
        }
        />
        </View>
          </View>
        )}

  


        {/* A button to schedule notifications at the saved times */}
        { <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? 'blue' : 'lightblue'},
            styles.ScheduleButton,
            ]}
          onPress={() => {
            //Noah: Use this function to remove all current notifications in the event that they are changing their times.
            Notifications.cancelAllScheduledNotificationsAsync();
            {Survey1 && (
              scheduleNotificationAtTime(hour1, minute1, time1, 1)
            )}
            {Survey2 && (
              scheduleNotificationAtTime(hour2, minute2, time2, 2)
            )}
            {Survey3 && (
              scheduleNotificationAtTime(hour3, minute3, time3, 3)
            )}
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Notifications Started",
                body: 'You will receive daily notifications at the given times until you press "Clear Notifications"',
              },
              trigger: {seconds: 1},
            });
          }}>
            <Text style={{color: 'black', fontSize: 15}}>Schedule Times</Text>
          </Pressable> }
  
        
        {/* { <Button
          style={styles.button}
          title="Go to Surveys"
        
          onPress={() =>
            navigation.navigate('Surveys')
          }
        /> }
        { <Button
          style={styles.button}
          title="Go to Calendar"
          onPress={() =>
            navigation.navigate('Calendar')
          }
        /> } */}
        { <Pressable
          style={({pressed}) => [
          {backgroundColor: pressed ? 'maroon' : 'orangered'},
          styles.ClearButton,
          ]}
          onPress={() => {
            //Noah: Use this function to remove all current notifications in the event that they are changing their times.
            Notifications.cancelAllScheduledNotificationsAsync();
            Notifications.scheduleNotificationAsync({
              content: {
                title: "Notifications Cleared",
                body: 'Remember to press "Schedule Times" to start them again',
              },
              trigger: {seconds: 1},
            });
            
          }}>
          <Text style={{color: 'white', fontSize: 15}}>Clear Notifications</Text>
        </Pressable> }
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: { // container for whole page except title
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      // justifyContent: 'space-around',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 5,
  },
  subtitle: {
      fontSize: 15,
      fontWeight: 'normal',
      fontStyle: 'italic',
      textAlign: 'center',
      margin: 0,
      marginBottom: 15,
  },
    surveyContainer: { // doesn't change anything
      flex: 1 / 4,
      width: '90%',
      flexDirection: 'row',
      backgroundColor: '#ccc',
      alignItems:'center',
      justifyContent: 'space-around',
    },
    morningDropdowns:{ // changes the morning dropdown boxes
        justifyContent:'space-evenly',
        flexDirection:'row',
        flex:1/10,
        flexWrap:'wrap',
        padding:10,
        paddingTop:5,
        zIndex:3,
        marginTop: 10,
      },
      afternoonDropdowns:{ // changes the afternoon dropdown boxes
        justifyContent:'space-evenly',
        flexDirection:'row',
        flex:1/10,
        flexWrap:'wrap',
        padding:10,
        paddingTop:5,
        zIndex:2,
        marginTop: 10,
      },
      eveningDropdowns:{ // changes the evening dropdown boxes
        justifyContent:'space-evenly',
        flexDirection:'row',
        flex:1/10,
        flexWrap:'wrap',
        padding:10,
        paddingTop:5,
        zIndex:1,
        marginTop: 10,
      },
      threeSurveys:{ // this affects the titles of the three survey dropdowns (morning survey, afternoon survey, evening survey)
        fontWeight: 'bold',
      },
      Morning:{ // this affects the morning survey container
        backgroundColor: 'rgba(219,218,140,0.7)',
        borderRadius: 20,
        alignItems:'center',
        // justifyContent: 'space-around',
        flex: 1 / 4,
        maxHeight: 150,
        width: '90%',
        paddingTop: 15,
        marginBottom: 10,
        zIndex: 5,
      },

      Afternoon:{ // this affects the afternoon survey container
        backgroundColor: 'rgba(6,161,236,0.6)',
        borderRadius: 20,
        alignItems:'center',
        // justifyContent: 'space-around',
        flex: 1 / 4,
        maxHeight: 150,
        width: '90%',
        paddingTop: 15,
        marginBottom: 10,
        zIndex: 4,
      },

      Evening:{ // this affects the evening survey container
        backgroundColor: 'rgba(49,40,88,0.5)',
        borderRadius: 20,
        alignItems:'center',
        // justifyContent: 'space-around',
        flex: 1 / 4,
        maxHeight: 150,
        width: '90%',
        paddingTop: 15,
        marginBottom: 10,
        zIndex: 3,
      },

      ClearButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 200,
        height: 50,
        borderRadius: 20,
     },
      ScheduleButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 200,
        height: 50,
        borderRadius: 20,
      },
    });

  export default TimeScreen