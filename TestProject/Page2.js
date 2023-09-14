import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Platform, Pressable } from 'react-native';
import { A, S } from '@expo/html-elements';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DataTable } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

//Feedback and Survey Screen
const FeedbackScreen = ({navigation, route}) => {
    //Const to set the state of the checkboxes
      const [isChecked, setChecked] = useState(false);
      const [isChecked2, setChecked2] = useState(false);
      const [isChecked3, setChecked3] = useState(false);
      const [isChecked4, setChecked4] = useState(false);
      const [isChecked5, setChecked5] = useState(false);
      const [isChecked6, setChecked6] = useState(false);
      const [isChecked7, setChecked7] = useState(false);
      const [isChecked8, setChecked8] = useState(false);
      const [isChecked9, setChecked9] = useState(false);
      const [isChecked10, setChecked10] = useState(false);
      const [isChecked11, setChecked11] = useState(false);
      const [isChecked12, setChecked12] = useState(false);
      const [isChecked13, setChecked13] = useState(false);
      const [isChecked14, setChecked14] = useState(false);
      const [isChecked15, setChecked15] = useState(false);
      const [isChecked16, setChecked16] = useState(false);
      const [isChecked17, setChecked17] = useState(false);
      const [isChecked18, setChecked18] = useState(false);
      const [isChecked19, setChecked19] = useState(false);
      const [isChecked20, setChecked20] = useState(false);
      const [isChecked21, setChecked21] = useState(false);

      //Const to access the survey checks booleans from the previous page if needed
      const {Survey1, Survey2, Survey3} = route.params || {};

      //Const to set survey links from Secure Storage
      const [Survey1Link, setSurvey1Link] = useState('');
      const [Survey2Link, setSurvey2Link] = useState('');
      const [Survey3Link, setSurvey3Link] = useState('');
      
      //function to access the survey links from secure storage and save to useable variables
      useEffect(() => {
        const getSavedLinks = async () => {
          const RetrievedLink1 = localStorage.getItem('Survey1Link');
          setSurvey1Link(RetrievedLink1);

          const RetrievedLink2 = await SecureStore.getItemAsync('Survey2Link');
          setSurvey2Link(RetrievedLink2);

          const RetrievedLink3 = await SecureStore.getItemAsync('Survey3Link');
          setSurvey3Link(RetrievedLink3);
        };
    
        getSavedLinks();
      }, []);

    //Return Screen
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(219,218,140,0.7)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/S77cc9RZPyK8R7Yp9');
                Linking.openURL(Survey1Link)
                console.log(Survey1Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 1</Text>
            </Pressable>

            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(6,161,236,0.6)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/Y55vHM5wwfmQA3T6A');
                Linking.openURL(Survey2Link)
                console.log(Survey2Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 2</Text>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(49,40,88,0.5)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/bfnoJQ5njbEXqZFR9');
                Linking.openURL(Survey3Link)
                console.log(Survey3Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 3</Text>
            </Pressable>
        </View>

        {/* Nazhone: Put your checkbox code here */}
        <DataTable>
      
        <DataTable.Row>
          <DataTable.Title>Monday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Tuesday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked5} onValueChange={setChecked5} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked6} onValueChange={setChecked6} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Wednesday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked7} onValueChange={setChecked7} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked8} onValueChange={setChecked8} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked9} onValueChange={setChecked9} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Thursday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked10} onValueChange={setChecked10} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked11} onValueChange={setChecked11} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked12} onValueChange={setChecked12} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Friday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked13} onValueChange={setChecked13} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked14} onValueChange={setChecked14} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked15} onValueChange={setChecked15} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Saturday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked16} onValueChange={setChecked16} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked17} onValueChange={setChecked17} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked18} onValueChange={setChecked18} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Sunday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked19} onValueChange={setChecked19} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked20} onValueChange={setChecked20} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked21} onValueChange={setChecked21} />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      </View>
    );
  };

  const styles = StyleSheet.create({

    buttonContainer: { //container for the survey buttons
      margin: 20,
      borderWidth: 1,
      borderRadius: 2,
      height:50,
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'space-evenly',
      //paddingLeft: 40,
      zIndex: 1,
      backgroundColor: '#E2ecec',
    },
    SurveyButton: { //individual survey buttons
      height: 40,
      width: 120,
      margin: 5,
      borderRadius: 15,
      textAlign: 'center',
      zIndex: 2,
      justifyContent: 'center',
      paddingLeft: 28,
    },


    container: { // container for whole page
      flex: 0,
      backgroundColor: 'white',
      alignItems:'center',
      justifyContent: 'space-around',
      position: 'relative',
      top: 0,
      },

    checkbox: { // This is the individual checkboxes
      backgroundColor: 'white',
      borderColor: 'darkcyan',
    },

  });

//   surveyContainer: {
//     flex: 3/4,
//     width: '90%',
//     flexDirection: 'row',
//     backgroundColor: '#ccc',
//     alignItems:'center',
//     justifyContent: 'space-around',
//   },
//   appButtonContainer: {
//     padding: 10,
//     backgroundColor: '#bbd',
//     borderRadius: 20,
//     textAlign: 'center',
//     height:35,
//   },    
// container: {
//   flex: 0,
//   backgroundColor: '#fff',
//   alignItems:'center',
//   justifyContent: 'space-around',
//   },
// input: {
//   height: 50,
//   width: 200,
//   margin: 10,
//   borderStyle: 'solid',
//   borderWidth: 2,
//   borderRadius: 10,
//   textAlign: 'center',
// },
// button: {
//   height: 20,
//   width: '60%',
//   margin: 10,
//   padding: 20,
//   borderRadius: 50,
//   textAlign: 'center',
// },
// appButtonText:{
//   fontSize:12,
//   textAlign: 'center',
// }
// });
export default FeedbackScreen