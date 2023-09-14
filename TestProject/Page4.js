import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Platform, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
//import RNFS from 'react-native-fs';
import { B } from '@expo/html-elements';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

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

    //functions to save survey links to secure storage and set to default link if no link is entered
    const saveLink1 = async (link) => {
        const finalLink1 = link || 'https://forms.gle/S77cc9RZPyK8R7Yp9';
        localStorage.setItem('Survey1Link', finalLink1);
        console.log(finalLink1);
    }

    const saveLink2 = async (link) => {
        const finalLink2 = link || 'https://forms.gle/Y55vHM5wwfmQA3T6A';
        await SecureStore.setItemAsync('Survey2Link', finalLink2);
        console.log(finalLink2);
    }

    const saveLink3 = async (link) => {
        const finalLink3 = link || 'https://forms.gle/bfnoJQ5njbEXqZFR9';
        await SecureStore.setItemAsync('Survey3Link', finalLink3);
        console.log(finalLink3);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Toggle Surveys and Change Links</Text>
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
                    navigation.navigate('Time Select', {Survey1, Survey2, Survey3})
                }}>
                <Text style={{color: 'black', fontSize: 15}}>Update Surveys</Text>
            </Pressable>
            <Pressable 
                style={({pressed}) => [
                    {backgroundColor: pressed ? 'beige' : 'goldenrod'},
                    styles.SaveButton,
                    ]} 
                onPress={() => {
                    saveLink1(Survey1Link);
                    saveLink2(Survey2Link);
                    saveLink3(Survey3Link);
                    navigation.navigate('Surveys', {Survey1, Survey2, Survey3})
                }}>
                <Text style={{color: 'black', fontSize: 15}}>Save Links</Text>
            </Pressable>
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
            marginBottom: 15,
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

