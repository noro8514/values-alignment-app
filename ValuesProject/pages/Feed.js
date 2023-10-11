//Imports
import React from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView } from 'react-native';
import {ExperienceCard, ValueCard, ValueTag} from '../components/MasterComponents';
import {Experience, Value} from '../components/MasterClasses';


//Ideas from Figma
//Need a possible page or pop up for the reflections
//Reflections would act as a comment on the existing experience so it wouldnt be a new experience

//Moved to MasterClasses.js
// Functions
// class Experience {
//     constructor(title, body, values){
//         this.title=title;
//         this.body=body;
//         this.values=values;
//     }
// }
const testValue1 = new Value('Friendship', 'This is the definition of friendship');
const testValue2 = new Value('Generosity', 'This is the definition of generosity');
const testValue3 = new Value('Love', 'This is the definition of love');

const testExp = new Experience(
    "My Experience", 
    
    "this is my experience content",
    [
        testValue1,
        testValue2,
        testValue3
    ]);
testExp.imageName=require('../assets/mall-trip.png');

//Feed Screen
/* Each Experience element is rendered here and fills in information needed from Experience-component
 * Hoping to make the population done in the add experience section, and have that go into an array 
 * that is simply displayed here as a scrollable list
 * Nazhone
 */
const FeedScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ExperienceCard
                    Experience={testExp}
                    //navigation={navigation}
                />
            </ScrollView>
        </View>
    );
}

//Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});

export default FeedScreen;