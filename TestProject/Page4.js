import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
//import RNFS from 'react-native-fs';
import { A, B } from '@expo/html-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';



//settings screen
//Allow user to set survey links, and how many notifications they want to receive
const SettingsScreen = ({navigation, route}) => {
    const [Survey1, setSurvey1] = useState(false);
    const [Survey2, setSurvey2] = useState(false);
    const [Survey3, setSurvey3] = useState(false);

    const [Survey1Link, setSurvey1Link] = useState('');
    const [Survey2Link, setSurvey2Link] = useState('');
    const [Survey3Link, setSurvey3Link] = useState('');
    // const handleCheckboxChange1 = () => {
    //     setSurvey1(!Survey1);
    //     setSurvey1Link('');
    // }

    // const handleCheckboxChange2 = () => {
    //     setSurvey2(!Survey2);
    //     setSurvey2Link('');
    // }

    // const handleCheckboxChange3 = () => {
    //     setSurvey3(!Survey3);
    //     setSurvey3Link('');
    // }
    
    //function to load the survey links and values from secure storage and save to useable variables on first load
     useEffect(() => {
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
      };
      loadData();
    }, []);

    //function to load the survey links and values from secure storage and save to useable variables on every load
    useFocusEffect(
        React.useCallback(() => {
            const loadData = async () => {
          //Load the survey values
            const RetrievedSurvey1 = await SecureStore.getItemAsync('Survey1');
            setSurvey1(JSON.parse(RetrievedSurvey1));
            console.log('Survey 1: ' + RetrievedSurvey1);

            const RetrievedSurvey2 = await SecureStore.getItemAsync('Survey2');
            setSurvey2(JSON.parse(RetrievedSurvey2));
            console.log('Survey 2: ' + RetrievedSurvey2);

            const RetrievedSurvey3 = await SecureStore.getItemAsync('Survey3');
            setSurvey3(JSON.parse(RetrievedSurvey3));
            console.log('Survey 3: ' + RetrievedSurvey3);

        //   //Load the survey links
        //      const SavedLink1 = await SecureStore.getItemAsync('Survey1Link');
        // //     setSurvey1Link(SavedLink1);
        // //   //console.log(Survey1Link);

        //      const SavedLink2 = await SecureStore.getItemAsync('Survey2Link');
        // //     setSurvey2Link(SavedLink2);

        //      const SavedLink3 = await SecureStore.getItemAsync('Survey3Link');
        // //     setSurvey3Link(SavedLink3);
        //   };
        loadData();
          }
        } , [])
      );

    //functions to save survey links to secure storage and set to default link if no link is entered
    // const saveLink1 = async (link) => {
    //     const finalLink1 = link || 'https://forms.gle/S77cc9RZPyK8R7Yp9';
    //     await SecureStore.setItemAsync('Survey1Link', finalLink1);
    //     console.log('Survey 1: ' + finalLink1);
    // }

    // const saveLink2 = async (link) => {
    //     const finalLink2 = link || 'https://forms.gle/Y55vHM5wwfmQA3T6A';
    //     await SecureStore.setItemAsync('Survey2Link', finalLink2);
    //     console.log('Survey 2: '+finalLink2);
    // }

    // const saveLink3 = async (link) => {
    //     const finalLink3 = link || 'https://forms.gle/bfnoJQ5njbEXqZFR9';
    //     await SecureStore.setItemAsync('Survey3Link', finalLink3);
    //     console.log('Survey 3: '+finalLink3);
    // }

    //functions to save survey values to secure storage
    const saveSurvey1 = async (link) => {
        value1=JSON.stringify(Survey1);
        const finalLink1 = link || 'https://forms.gle/S77cc9RZPyK8R7Yp9';
        //value=Survey1;
        try {
            await SecureStore.setItemAsync('Survey1', value1);
            await SecureStore.setItemAsync('Survey1Link', finalLink1);
        } catch (e) {
            console.log(e);
        }
        console.log('Survey 1: '+value1 + ' ' + finalLink1);
    }

    const saveSurvey2 = async (link) => {
        value2=JSON.stringify(Survey2);
        const finalLink2 = link || 'https://forms.gle/Y55vHM5wwfmQA3T6A';
        try {
            await SecureStore.setItemAsync('Survey2', value2);
            await SecureStore.setItemAsync('Survey2Link', finalLink2);
        } catch (e) {
            console.log(e);
        }
        console.log('Survey 2: '+value2 + ' ' + finalLink2);
    }

    const saveSurvey3 = async (link) => {
        value3=JSON.stringify(Survey3);
        const finalLink3 = link || 'https://forms.gle/bfnoJQ5njbEXqZFR9';
        try {
            await SecureStore.setItemAsync('Survey3', value3);
            await SecureStore.setItemAsync('Survey3Link', finalLink3);
        } catch (e) {
            console.log(e);
        } 
        console.log('Survey 3: '+value3 + ' ' + finalLink3);  
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Toggle Surveys and Change Links</Text>
            <Text style={styles.subtitle}>Enter Link in 'https://...' form</Text>
            <View style={styles.SurveyContainer}>
                <Checkbox
                    value={Survey1}
                    onValueChange={setSurvey1}
                    style={styles.checkbox}
                />
                <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>Survey 1</Text>
                {Survey1  &&  (
                    <View style={styles.SurveyContainer}>
                        <TextInput style={styles.textInput} value={Survey1Link} onChangeText={setSurvey1Link} placeholder="Enter Survey 1 Link Here"/>
                    </View>
                )}
            </View>
            <View style={styles.SurveyContainer}>
                <Checkbox
                    value={Survey2}
                    onValueChange={setSurvey2}
                    style={styles.checkbox}
                />
                <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>Survey 2</Text>
                {Survey2  &&  (
                    <View style={styles.SurveyContainer}>
                        <TextInput style={styles.textInput} value={Survey2Link} onChangeText={setSurvey2Link} placeholder="Enter Survey 2 Link Here"/>
                    </View>
                )}
            </View>
            <View style={styles.SurveyContainer}>
                <Checkbox
                    value={Survey3}
                    onValueChange={setSurvey3}
                    style={styles.checkbox}
                />
                <Text style={{color: 'black', fontSize: 15, fontWeight: '500'}}>Survey 3</Text>
                {Survey3  &&  (
                    <View style={styles.SurveyContainer}>
                        <TextInput style={styles.textInput} value={Survey3Link} onChangeText={setSurvey3Link} placeholder="Enter Survey 3 Link Here"/>
                    </View>
                )}
            </View>
            {/* Buttons to push all values to the next screen */}
            <Pressable
                style={({pressed}) => [
                    {backgroundColor: pressed ? 'forestgreen' : 'lightgreen'},
                    styles.UpdateButton,
                    ]}
                onPress={() => {
                    saveSurvey1(Survey1Link);
                    saveSurvey2(Survey2Link);
                    saveSurvey3(Survey3Link);
                    // saveLink1(Survey1Link);
                    // saveLink2(Survey2Link);
                    // saveLink3(Survey3Link);
                    //navigation.navigate('Time Select', {Survey1, Survey2, Survey3})
                }}>
                <Text style={{color: 'black', fontSize: 15}}>Update Surveys</Text>
            </Pressable>
            {/* <Pressable 
                style={({pressed}) => [
                    {backgroundColor: pressed ? 'beige' : 'goldenrod'},
                    styles.SaveButton,
                    ]} 
                onPress={() => {
                    saveLink1(Survey1Link);
                    saveLink2(Survey2Link);
                    saveLink3(Survey3Link);
                    //navigation.navigate('Surveys', {Survey1, Survey2, Survey3})
                }}>
                <Text style={{color: 'black', fontSize: 15}}>Save Links</Text>
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
      container: { // container for datatable
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

      SurveyContainer: { // container for datatable
        flex: 0,
        borderRadius: 10,
        backgroundColor: '#88b6b9',
        alignItems:'center',
        justifyContent: 'space-around',
        position: 'relative',
        top: 0,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 20,
        minWidth: 100,
        minHeight: 50,
        },
  
      checkbox: { // This is the individual checkboxes
        backgroundColor: 'white',
        borderColor: 'darkcyan',
        marginRight: 8,
        marginLeft: 8,
      },

      textInput: {// text input for the survey links
        height: 40,
        width: 200,
        margin: 10,
        borderStyle: 'solid',
        borderColor: 'darkcyan',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center',
      },
      UpdateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 200,
        height: 50,
        borderRadius: 20,
     },
     SaveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        width: 200,
        height: 50,
        borderRadius: 20,
     },
});

export default SettingsScreen;

