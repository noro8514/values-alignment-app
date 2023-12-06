//Imports
import { StatusBar } from 'expo-status-bar';
import {React, useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker'



//Functions


//New Experience Screen
const NewExperienceScreen = ({navigation, route}) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
    
        
        console.log(result);
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
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
            {({ handleChange, handleSubmit, values }) => (
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

                    <Button title="pick image" onPress={pickImage} value={values.image} />

                    <Button title="Submit" onPress={handleSubmit} />

                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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