//Imports
import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Formik } from 'formik';
import * as ImagePicker from 'react-native-image-picker'


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
        <Formik
            initialValues={{ title: '', location: '', date: '', description: '', image: null }}
            onSubmit={(values, {resetForm}) => {
                // Display submitted data below the form
                alert(JSON.stringify(values, null, 2));
                resetForm();
            }}
        >
            {({ handleChange, handleSubmit, setFieldValue, values }) => (
                <View>
                    <TextInput
                        placeholder="Title"
                        value={values.title}
                        onChangeText={handleChange('title')}
                    />

                    <TextInput
                        placeholder="Location"
                        value={values.location}
                        onChangeText={handleChange('location')}
                    />

                    <TextInput
                        placeholder="Date"
                        value={values.date}
                        onChangeText={handleChange('date')}
                    />

                    <TextInput
                        placeholder="Description"
                        value={values.description}
                        onChangeText={handleChange('description')}
                    />

                    <TouchableOpacity onPress={() => selectImage(setFieldValue)}>
                        <View style={{ backgroundColor: 'blue', padding: 10 }}>
                        <Text style={{ color: 'white' }}>Select Image</Text>
                        </View>
                    </TouchableOpacity>

                    {values.image && <Image source={{ uri: values.image }} style={{ width: 200, height: 200 }} />}

                    <Button title="Submit" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
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