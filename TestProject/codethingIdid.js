import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Hi welcome to the Notifications App</Text>
      <Text>Please enter your name and the times you want to be notified</Text>
      {/* <StatusBar style="auto" /> */}
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Full Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Enter 1st time"
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Enter 2nd time"
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber3}
          value={number3}
          placeholder="Enter 3rd time"
          // keyboarType="numeric"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },

  // text: {
  //   textAlign: 'center',
  //   color: 'Purple',
  // },
});

export default TextInputExample;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Choose Your times.</Text>
//       <StatusBar style="auto" />
//       {/* // Create a button
//             <Button
  
//                 // Some properties given to Button
//                 title="Geeks"
//                 onPress={() => Alert.alert(
//                     'Its GeeksforGeeks !')}
//             > Button</Button> */}
        
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(255,255,255)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'strong',
//     borderStyle: 'solid',
//     borderColor: 'lightblue',
//     borderWidth: '20px',
//   },
// });

