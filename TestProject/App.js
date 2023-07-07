import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as SecureStore from 'expo-secure-store';
import React from 'react';


//Shane: Function to save values to the secure store API
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

//Shane: function to find values from a given key
const getValueFor = async (key) => {
  try {
    const result = await SecureStore.getItemAsync(key);
    console.log(result);
    alert(key + ": " + result);
    return result || '';
  }
  catch(error) {
    //Could not obtain value
    alert('No values stored under that key.');
    return '';
  }
}

//Shane: Function to  1. Convert time to 24 Hour format and split to hours and minutes,
//2. Set the scheduled time to desired time using the converted string
//3. Use the scheduleNotification function to schedule the notification at that desired time
async function scheduleNotificationAtTime(timeString) {
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

  //Get the current date stamp
  const now = new Date(); 
  //Set the new date/time, adding the specified time
  const scheduledTime = new Date(
    now.getFullYear(), //set year
    now.getMonth(), //set month
    now.getDate(), // set day
    hours, // set hours in 24 hr format
    minutes,  // set minutes
    0   // set seconds
  );

  //Shane: A constant to hold the desired date and the repeat options for the scheduleNotificationAsync function
  const schedulingOptions = {
  //Sets time to the requested time, and sets the repeat to daily
  time: scheduledTime,
  repeat: 'day',
  };

  //Schedule the notification using the desired time
  Notifications.scheduleNotificationAsync({
    content: {
      title: "On Schedule!",
      body: '',
    },
    trigger: schedulingOptions,
  });
  console.log('Notification Scheduled')
}


Notifications.cancelAllScheduledNotificationsAsync();

/*Noah Note: This handler determines how the app will handle a notification if the app is currently open. It takes in the incoming 
notification as an arugment. 
*/
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


/*Noah Note: This is the function I found that is closest to what we are likely looking for. It sends a notification after x seconds
and can be repeated 
*/
Notifications.scheduleNotificationAsync({
  content: {
    title: "Testing... It Works!!",
    body: 'Good Job',
  },
  trigger: { seconds: 6, repeats: false },
});

Notifications.dismissAllNotificationsAsync();

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  //Noah Note: This constant variable contains the notification's title and description, along with a specified sound.
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  /*Noah Note: It is unlikely we will ever need to edit this part, but take note that our notification message from above is being
  stringified at the end of it. */
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Press to Send Notification Now"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
      
      {/* Shane's Code for Time Inputs */}
      {/* Has three inputs for user to put in strings, each one is connected to each value */}
      <Text>Enter Times You Would Like to Recieve Notifications:{"\n"}(Ex: 7:00 pm or 3:30 am)</Text>
      <TextInput
        placeholder= "Time 1"
        style={styles.input}
        onChangeText={text => onChangeValue1(text)}
        value={value1}
      />
      {/* <TextInput
        placeholder= "Time 2"        
        style={styles.input}
        onChangeText={text => onChangeValue2(text)}
        value={value2}
      />
      <TextInput
        placeholder= "Time 3"
        style={styles.input}
        onChangeText={text => onChangeValue3(text)}
        value={value3}
      /> */}
      
      {/* A submit button to save each value to its respective key */}
      <Button
        style={styles.button}
        title="Submit Times"
        onPress={() => {
          if(value1 === ''){
            alert('Please enter a value');
          }
          else {
            save(key1, value1);
            onChangeValue1('');
          }
          // save(key2, value2);
          // onChangeValue2('');
          // save(key3, value3);
          // onChangeValue3('');
        }}
      />

      {/* A button to check the time values and to test if they are saved after an app reload */}
      <Button
        style={styles.button}
        title="Check Times"
        onPress={() => {
          // getValueFor(key3);
          // getValueFor(key2);
          let val = getValueFor('T1');
          //alert("Your Times Are: \n" + val);
          // alert("Your Times Are: \n" + getValueFor(key1) + "\n" + getValueFor(key2) + "\n" + getValueFor(key3));
        }}
      />

      {/* A button to schedule notifications at the saved times */}
      {/* <Button
        style={styles.button}
        title="Schedule Times"
        onPress={() => {
          // scheduleNotificationAtTime(getValueFor(key3));
          // scheduleNotificationAtTime(getValueFor(key2));
          let time = getValueFor(key1);
          console.log(time);
          //scheduleNotificationAtTime(time);
        }}
      /> */}
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
