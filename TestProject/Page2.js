import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Platform, Pressable, Linking } from 'react-native';
import { A, S } from '@expo/html-elements';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
//import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DataTable } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

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
      
      //function to load the state of the checkboxes from secure storage, had to be done this way to avoid a bug
      //Only the first check would be loaded because of the await commands
      useEffect(() => {
        const loadCheck = async () => {
          const RetrievedisChecked = await SecureStore.getItemAsync('isChecked');
          setChecked(JSON.parse(RetrievedisChecked));
        }
        loadCheck();
        const loadCheck2 = async () => {
          const RetrievedisChecked2 = await SecureStore.getItemAsync('isChecked2');
          setChecked2(JSON.parse(RetrievedisChecked2));
        }
        loadCheck2();
        const loadCheck3 = async () => {
          const RetrievedisChecked3 = await SecureStore.getItemAsync('isChecked3');
          setChecked3(JSON.parse(RetrievedisChecked3));
        }
        loadCheck3();
        const loadCheck4 = async () => {
          const RetrievedisChecked4 = await SecureStore.getItemAsync('isChecked4');
          setChecked4(JSON.parse(RetrievedisChecked4));
        }
        loadCheck4();
        const loadCheck5 = async () => {
          const RetrievedisChecked5 = await SecureStore.getItemAsync('isChecked5');
          setChecked5(JSON.parse(RetrievedisChecked5));
        }
        loadCheck5();
        const loadCheck6 = async () => {
          const RetrievedisChecked6 = await SecureStore.getItemAsync('isChecked6');
          setChecked6(JSON.parse(RetrievedisChecked6));
        }
        loadCheck6();
        const loadCheck7 = async () => {
          const RetrievedisChecked7 = await SecureStore.getItemAsync('isChecked7');
          setChecked7(JSON.parse(RetrievedisChecked7));
        };
        loadCheck7();
        const loadCheck8 = async () => {
          const RetrievedisChecked8 = await SecureStore.getItemAsync('isChecked8');
          setChecked8(JSON.parse(RetrievedisChecked8));
        }
        loadCheck8();
        const loadCheck9 = async () => {
          const RetrievedisChecked9 = await SecureStore.getItemAsync('isChecked9');
          setChecked9(JSON.parse(RetrievedisChecked9));
        }
        loadCheck9();
        const loadCheck10 = async () => {
          const RetrievedisChecked10 = await SecureStore.getItemAsync('isChecked10');
          setChecked10(JSON.parse(RetrievedisChecked10));
        }
        loadCheck10();
        const loadCheck11 = async () => {
          const RetrievedisChecked11 = await SecureStore.getItemAsync('isChecked11');
          setChecked11(JSON.parse(RetrievedisChecked11));
        }
        loadCheck11();
        const loadCheck12 = async () => {
          const RetrievedisChecked12 = await SecureStore.getItemAsync('isChecked12');
          setChecked12(JSON.parse(RetrievedisChecked12));
        }
        loadCheck12();
        const loadCheck13 = async () => {
          const RetrievedisChecked13 = await SecureStore.getItemAsync('isChecked13');
          setChecked13(JSON.parse(RetrievedisChecked13));
        }
        loadCheck13();
        const loadCheck14 = async () => {
          const RetrievedisChecked14 = await SecureStore.getItemAsync('isChecked14');
          setChecked14(JSON.parse(RetrievedisChecked14));
        }
        loadCheck14();
        const loadCheck15 = async () => {
          const RetrievedisChecked15 = await SecureStore.getItemAsync('isChecked15');
          setChecked15(JSON.parse(RetrievedisChecked15));
        }
        loadCheck15();
        const loadCheck16 = async () => {
          const RetrievedisChecked16 = await SecureStore.getItemAsync('isChecked16');
          setChecked16(JSON.parse(RetrievedisChecked16));
        }
        loadCheck16();
        const loadCheck17 = async () => {
          const RetrievedisChecked17 = await SecureStore.getItemAsync('isChecked17');
          setChecked17(JSON.parse(RetrievedisChecked17));
        }
        loadCheck17();
        const loadCheck18 = async () => {
          const RetrievedisChecked18 = await SecureStore.getItemAsync('isChecked18');
          setChecked18(JSON.parse(RetrievedisChecked18));
        }
        loadCheck18();
        const loadCheck19 = async () => {
          const RetrievedisChecked19 = await SecureStore.getItemAsync('isChecked19');
          setChecked19(JSON.parse(RetrievedisChecked19));
        }
        loadCheck19();
        const loadCheck20 = async () => {
          const RetrievedisChecked20 = await SecureStore.getItemAsync('isChecked20');
          setChecked20(JSON.parse(RetrievedisChecked20));
        }
        loadCheck20();
        const loadCheck21 = async () => {
          const RetrievedisChecked21 = await SecureStore.getItemAsync('isChecked21');
          setChecked21(JSON.parse(RetrievedisChecked21));
        }
        loadCheck21();
        //Loading the survey links just to be safe
        const loadSurvey1Link = async () => {
          const RetrievedSurvey1Link = await SecureStore.getItemAsync('Survey1Link');
          setSurvey1Link(RetrievedSurvey1Link);
        }
        loadSurvey1Link();
        const loadSurvey2Link = async () => {
          const RetrievedSurvey2Link = await SecureStore.getItemAsync('Survey2Link');
          setSurvey2Link(RetrievedSurvey2Link);
        }
        loadSurvey2Link();
        const loadSurvey3Link = async () => {
          const RetrievedSurvey3Link = await SecureStore.getItemAsync('Survey3Link');
          setSurvey3Link(RetrievedSurvey3Link);
        }
        loadSurvey3Link();
      }, []);

      //useEffect to save the state of the checkboxes to secure storage as they change
      useEffect(() => {
        SecureStore.setItemAsync('isChecked', JSON.stringify(isChecked));
        SecureStore.setItemAsync('isChecked2', JSON.stringify(isChecked2));
        SecureStore.setItemAsync('isChecked3', JSON.stringify(isChecked3));
        SecureStore.setItemAsync('isChecked4', JSON.stringify(isChecked4));
        SecureStore.setItemAsync('isChecked5', JSON.stringify(isChecked5));
        SecureStore.setItemAsync('isChecked6', JSON.stringify(isChecked6));
        SecureStore.setItemAsync('isChecked7', JSON.stringify(isChecked7));
        SecureStore.setItemAsync('isChecked8', JSON.stringify(isChecked8));
        SecureStore.setItemAsync('isChecked9', JSON.stringify(isChecked9));
        SecureStore.setItemAsync('isChecked10', JSON.stringify(isChecked10));
        SecureStore.setItemAsync('isChecked11', JSON.stringify(isChecked11));
        SecureStore.setItemAsync('isChecked12', JSON.stringify(isChecked12));
        SecureStore.setItemAsync('isChecked13', JSON.stringify(isChecked13));
        SecureStore.setItemAsync('isChecked14', JSON.stringify(isChecked14));
        SecureStore.setItemAsync('isChecked15', JSON.stringify(isChecked15));
        SecureStore.setItemAsync('isChecked16', JSON.stringify(isChecked16));
        SecureStore.setItemAsync('isChecked17', JSON.stringify(isChecked17));
        SecureStore.setItemAsync('isChecked18', JSON.stringify(isChecked18));
        SecureStore.setItemAsync('isChecked19', JSON.stringify(isChecked19));
        SecureStore.setItemAsync('isChecked20', JSON.stringify(isChecked20));
        SecureStore.setItemAsync('isChecked21', JSON.stringify(isChecked21));
      }, [isChecked, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10, isChecked11, isChecked12, isChecked13, isChecked14, isChecked15, isChecked16, isChecked17, isChecked18, isChecked19, isChecked20, isChecked21]);

      //Check time and reset checkboxes at 11:59 pm on Sunday
      useEffect(() => {
        // Check and reset the checkbox state every minute
        const intervalId = setInterval(checkAndResetCheckbox, 60000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

      //function to check the time and reset the checkboxes at 11:59 pm on Sunday
      const checkAndResetCheckbox = () => {
        // Get the current date and time
        const now = new Date();

        // Check if it's Sunday and the time is 11:59 PM (23:59)
        if (now.getDay() === 0 && now.getHours() === 23 && now.getMinutes() === 59) {
          // Reset the checkboxs to false
          setChecked(false);
          setChecked2(false);
          setChecked3(false);
          setChecked4(false);
          setChecked5(false);
          setChecked6(false);
          setChecked7(false);
          setChecked8(false);
          setChecked9(false);
          setChecked10(false);
          setChecked11(false);
          setChecked12(false);
          setChecked13(false);
          setChecked14(false);
          setChecked15(false);
          setChecked16(false);
          setChecked17(false);
          setChecked18(false);
          setChecked19(false);
          setChecked20(false);
          setChecked21(false);
          console.log('Checkboxes Cleared');
        }
      };


      //Const to set survey checks from Secure Storage
      const [Survey1, setSurvey1] = useState(false);
      const [Survey2, setSurvey2] = useState(false);
      const [Survey3, setSurvey3] = useState(false);

      //Const to set survey links
      const [Survey1Link, setSurvey1Link] = useState('');
      const [Survey2Link, setSurvey2Link] = useState('');
      const [Survey3Link, setSurvey3Link] = useState('');
      
      //function to load the survey links and values from secure storage and save to useable variables on every page load
      useFocusEffect(
        React.useCallback(() => {
          const loadData = async () => {
          //Load the survey values
            const RetrievedSurvey1 = await SecureStore.getItemAsync('Survey1');
            setSurvey1(JSON.parse(RetrievedSurvey1));

            const RetrievedSurvey2 = await SecureStore.getItemAsync('Survey2');
            setSurvey2(JSON.parse(RetrievedSurvey2));

            const RetrievedSurvey3 = await SecureStore.getItemAsync('Survey3');
            setSurvey3(JSON.parse(RetrievedSurvey3));

          //Load the survey links
            const SavedLink1 = await SecureStore.getItemAsync('Survey1Link');
            setSurvey1Link(SavedLink1);
          //console.log(Survey1Link);

            const SavedLink2 = await SecureStore.getItemAsync('Survey2Link');
            setSurvey2Link(SavedLink2);

            const SavedLink3 = await SecureStore.getItemAsync('Survey3Link');
            setSurvey3Link(SavedLink3);
          };
        loadData();
        } , [])
      );



    //Return Screen
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Surveys</Text>
        <Text style={styles.subtitle}>Links and Weekly Progress Tracking</Text>
        <View style={styles.buttonContainer}>
          {Survey1 && (
            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(219,218,140,0.7)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/S77cc9RZPyK8R7Yp9');
                Linking.openURL(Survey1Link).catch((err) => console.error('Error opening link:', err));
                //console.log(Survey1Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 1</Text>
            </Pressable>
          )}
          {Survey2 && (
            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(6,161,236,0.6)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/Y55vHM5wwfmQA3T6A');
                Linking.openURL(Survey2Link).catch((err) => console.error('Error opening link:', err));
                //console.log(Survey2Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 2</Text>
            </Pressable>
          )}
          {Survey3 && (
            <Pressable
              style={({pressed}) => [
                {backgroundColor: pressed ? 'lightgrey' : 'rgba(49,40,88,0.5)'},
                styles.SurveyButton,
                ]}
              onPress={() => {
                //Linking.openURL('https://forms.gle/bfnoJQ5njbEXqZFR9');
                Linking.openURL(Survey3Link).catch((err) => console.error('Error opening link:', err));
                //console.log(Survey3Link);
              }}>
              <Text style={{fontSize: 17, color: 'black', fontWeight: '500'}}>Survey 3</Text>
            </Pressable>
          )}
        </View>

        {/* Nazhone: Put your checkbox code here */}
        <DataTable style={styles.DataTable}>
        <DataTable.Row>
          <DataTable.Title>Monday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Tuesday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked5} onValueChange={setChecked5} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked6} onValueChange={setChecked6} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Wednesday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked7} onValueChange={setChecked7} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked8} onValueChange={setChecked8} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked9} onValueChange={setChecked9} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Thursday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked10} onValueChange={setChecked10} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked11} onValueChange={setChecked11} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked12} onValueChange={setChecked12} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Friday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked13} onValueChange={setChecked13} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked14} onValueChange={setChecked14} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked15} onValueChange={setChecked15} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Saturday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked16} onValueChange={setChecked16} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked17} onValueChange={setChecked17} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked18} onValueChange={setChecked18} />
          </DataTable.Cell>
          )}
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Sunday</DataTable.Title>
          {Survey1 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked19} onValueChange={setChecked19} />
          </DataTable.Cell>
          )}
          {Survey2 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked20} onValueChange={setChecked20} />
          </DataTable.Cell>
          )}
          {Survey3 && (
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked21} onValueChange={setChecked21} />
          </DataTable.Cell>
          )}
        </DataTable.Row>
      </DataTable>
      <Text style={styles.subtitle}>For now, tracking will reset at 11:59 pm on Sunday</Text>
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
        marginBottom: 10,
    },

    checkbox: { // This is the individual checkboxes
      backgroundColor: 'white',
      borderColor: 'darkcyan',
    },
    DataTable: {
      marginBottom: 10,
      backgroundColor: 'white',
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