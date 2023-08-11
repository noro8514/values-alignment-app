//Imports
import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';
import Experience from '../components/Experience-component'
import Value from '../components/Value-component'

//Functions

//Feed Screen
const FeedScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
            <Experience 
                expData={{title:'Lake View', imageName:require('../assets/lake-view.png')}}
                valData={[
                    {
                        id: 'aaa',
                        title: 'Friendship'
                    },
                    {
                        id: 'aab',
                        title: 'Generosity'
                    },
                    {
                        id: 'aac',
                        title: 'Love'
                    },
                ]}
            />
        </View>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FeedScreen;