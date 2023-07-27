import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Platform } from 'react-native';
import { A } from '@expo/html-elements';
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
    const S1button = ({ onPress, title }) => (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://forms.gle/S77cc9RZPyK8R7Yp9');
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
    const S2button = ({ onPress, title }) => (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://forms.gle/Y55vHM5wwfmQA3T6A');
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
      const S3button = ({ onPress, title }) => (
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://forms.gle/bfnoJQ5njbEXqZFR9');
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
      );
    
      const [isChecked, setChecked] = useState(false);

    return (
      <View style={styles.surveyContainer}>

        {/* Nazhone: Put your checkbox code here */}
        <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            Date
          </DataTable.Title>
          <DataTable.Title>
            <S1button title="Survey 1" size="sm" backgroundColor="#007bff"/>
          </DataTable.Title>
          <DataTable.Title>
            <S2button title="Survey 2" size="sm" backgroundColor="#007bff"/>
          </DataTable.Title>
          <DataTable.Title>
            <S3button title="Survey 3" size="sm" backgroundColor="#007bff"/>
          </DataTable.Title>
        </DataTable.Header>


        <DataTable.Row>
          <DataTable.Title>Monday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Tuesday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Wednesday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Thursday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Friday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Saturday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Title>Sunday</DataTable.Title>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
          <DataTable.Cell>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      </View>
    );
  };

  const styles = StyleSheet.create({
    surveyContainer: {
        flex: 1 / 4,
        width: '90%',
        flexDirection: 'row',
        backgroundColor: '#ccc',
        alignItems:'center',
        justifyContent: 'space-around',
      },
      appButtonContainer: {
        padding: 10,
        backgroundColor: '#bbd',
        borderRadius: 20,
        textAlign: 'center',
      },    
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent: 'space-around',
    },
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
      width: '60%',
      margin: 10,
      padding: 20,
      borderRadius: 50,
      textAlign: 'center',
    }
  });

export default FeedbackScreen