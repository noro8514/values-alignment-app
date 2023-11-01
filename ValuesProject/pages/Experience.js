//Imports
import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView, TextInput} from 'react-native';
import { Formik } from 'formik';
import ImagePicker from 'react-native-image-picker';

//Functions


//New Experience Screen
const NewExperienceScreen = ({navigation, route}) => {
    const selectImage = (setFieldValue) => {
        const options = {
            title: 'Add an Image',
            storageOptions: {
                skipBackup:true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                setFieldValue('image', source.uri);
            }
        });
    };

    return (
        <View>
            <Text>Hello world</Text>
        </View>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    innerContainer: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 5,
      },
});

export default NewExperienceScreen;