//Imports
import {React, useState} from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView, TextInput} from 'react-native';
import ExperienceCard from '../components/ExperienceCard'

/* Experience class holds title, body, and values */
class Experience {
    constructor(title, image, body, values){
        this.title=title;
        this.image=image;
        this.body=body;
        this.values=values;
    }
}
/* example Experience */
const testExp = new Experience(
    "My Experience", 
    require('../assets/lake-view.png'),
    "this is my experience", 
    [
        {id: '0', title: 'Friendship'},
        {id: '1', title: 'Generosity'},
        {id: '2', title: 'Love'},
    ]
);


//Feed Screen
/* Each Experience element is rendered here and fills in information needed from Experience-component
 * Hoping to make the population done in the add experience section, and have that go into an array 
 * that is simply displayed here as a scrollable list
 * Nazhone
 */
const FeedScreen = () => {
    const [text, setText] = useState('');
    const testExp2 = new Experience(
        [text], 
        require('../assets/mall-trip.png'),
        "this is my other experience", 
        [
            {id: '3', title: 'Creativity'},
            {id: '4', title: 'Joy'},
            {id: '2', title: 'Love'},
        ]
    );
    return (
        <View style={styles.container}>
            <View>
                <Text>Title:</Text>
                <TextInput
                    placeholder="Type here!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
            </View>
            <ScrollView>
                <ExperienceCard
                    expData={{title:testExp.title, imageName:testExp.image}}
                    valData={testExp.values}
                />
                <ExperienceCard
                    expData={{title:testExp2.title, imageName:testExp2.image}}
                    valData={testExp2.values}
                />
            </ScrollView>
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