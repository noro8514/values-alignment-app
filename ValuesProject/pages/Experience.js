//Imports
import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView, TextInput} from 'react-native';
import { Formik } from 'formik';

//Functions


//New Experience Screen
const NewExperienceScreen = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ description: ''}} // decription is required
                onSubmit={values => console.log(values)}
            >{({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style='styles.container'>
                    <View style={styles.innerContainer}>
                        <Text>Title:</Text>
                        <TextInput
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                            style={styles.input}
                            placeholder="title"
                        />
                        <Text>Where:</Text>
                        <TextInput
                            onChangeText={handleChange('location')}
                            onBlur={handleBlur('location')}
                            value={values.location}
                            style={styles.input}
                            placeholder="location"
                        />
                        <Text>When:</Text>
                        <TextInput
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                            value={values.date}
                            style={styles.input}
                            placeholder="date"
                        />
                    </View>
                    <View style={styles.innerContainer}>
                        <Text>Description:</Text>
                        <TextInput
                            editable
                            multiline
                            numberOfLines={10}
                            maxLength={40}
                            onChangeText={handleChange('description')}
                            value={values.description}
                            onBlur={handleBlur('description')}
                            style={styles.input}
                            placeholder="description"
                        />
                    </View>
                    <Button onPress={handleSubmit} title="Submit" />
                </View>

                )}

            </Formik>
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