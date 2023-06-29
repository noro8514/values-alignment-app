import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

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
    title: "On Schedule!",
    body: '',
  },
  trigger: {
    hour: 21,
    minute: 7,
    repeats: true,
  },
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
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

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
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
}

