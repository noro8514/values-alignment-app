import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as SecureStore from 'expo-secure-store';
import React from 'react';


// //Shane: Function to save values to the secure store API
// async function save(key, value) {
//   await SecureStore.setItemAsync(key, value);
// }

// //Shane: function to find values from a given key
// async function getValueFor(key) {
//   let result = await SecureStore.getItemAsync(key);
//   if (result) {
//     return result;
//   } else {
//     alert('No values stored under that key.');
//   }
// }

//Shane: Function to  1. Convert time to 24 Hour format and split to hours and minutes,
//2. Set the scheduled time to desired time using the converted string
//3. Use the scheduleNotification function to schedule the notification at that desired time
async function scheduleNotificationAtTime(timeString, timeNum) {
  //Convert time to hours (24 hour format), and minutes (Hoping time is in format like 7:00 pm or 5:35 am)
  const [time, period] = timeString.toLowerCase().split(' ');

  let [hours, minutes] = time.split(':');
  hours = parseInt(hours, 10);
  minutes = parseInt(minutes, 10);
  //Checks for if time is AM or PM
  if (period === 'pm' && hours !== 12) {
    hours += 12;
  } else if (period === 'am' && hours === 12) {
    hours = 0;
  }

  //Schedule the notification using the desired time
  if(timeNum === 1){
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Morning Survey",
      body: 'Time to take your morning survey!',
    },
    trigger: {
      hour: hours,
      minute: minutes,
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
      hour: hours,
      minute: minutes,
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
      hour: hours,
      minute: minutes,
      repeats: true,
    },
  });
}
  console.log('Notification Scheduled')
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


//Noah Note: Here is where the functionality of our app is coded. All of our notification variables and front-end layout is found here
export default function App() {
  //For Notifications
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  //For Secure Store
  //Initialize the keys as constant strings, and the values as a changeable string. 
  //Connected to the input through 'onChangeValue'
  const key1 = 'T1';
  // const key2 = 'T2';
  // const key3 = 'T3';
  const [value1, onChangeValue1] = React.useState('');
  // const [value2, onChangeValue2] = React.useState('');
  // const [value3, onChangeValue3] = React.useState('');

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

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  return (
    <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'space-around' }}>
      
      {/* Shane's Code for Time Inputs */}
      {/* Has three inputs for user to put in strings, each one is connected to each value */}
      <Text>Enter Times You Would Like to Recieve Notifications:{"\n"}(Ex: 7:00 pm or 3:30 am)</Text>
      <TextInput
        placeholder= "Time 1"
        style={styles.input}
        onChangeText={newText => setText(newText)}
        defaultValue = {text}
        />
        <TextInput
        placeholder= "Time 2"
        style={styles.input}
        onChangeText={newText => setText2(newText)}
        defaultValue = {text2}
      />
      <TextInput
        placeholder= "Time 3"
        style={styles.input}
        onChangeText={newText => setText3(newText)}
        defaultValue = {text3}
      />

      {/* A button to schedule notifications at the saved times */}
      { <Button
        style={styles.button}
        title="Schedule Times"
        onPress={() => {
          //Noah: Use this function to remove all current notifications in the event that they are changing their times.
          Notifications.cancelAllScheduledNotificationsAsync();
          scheduleNotificationAtTime(text, 1);
          scheduleNotificationAtTime(text2, 2);
          scheduleNotificationAtTime(text3, 3);
          Notifications.scheduleNotificationAsync({
            content: {
              title: "Notifications Started",
              body: 'You will receive daily notifications at the given times until you press "Clear Notifications"',
            },
            trigger: {seconds: 1},
          });
        }}
      /> }

      { <Button
        style={styles.button}
        title="Clear Notifications"
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
        }}
      /> }
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    height: 40,
    width: 200,
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
  }
});
