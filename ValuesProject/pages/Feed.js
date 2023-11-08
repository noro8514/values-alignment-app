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
    "(Test) Mall Trip!", 
    
    "(Content) I went to the mall",
    [
        testValue1,
        testValue2,
        testValue3
    ]);
testExp.imageName=require('../assets/mall-trip.png');

const testExp2 = new Experience(
    "(Test) Lake Trip!", 
    
    "(Content) I went to the lake",
    [
        testValue2,
        testValue3,
        testValue1
    ]);
testExp2.imageName=require('../assets/lake-view.png');

//Feed Screen
/* Each Experience element is rendered here and fills in information needed from Experience-component
 * Hoping to make the population done in the add experience section, and have that go into an array 
 * that is simply displayed here as a scrollable list
 * Nazhone
 */
let ExperienceList = [];
ExperienceList.push(testExp);
ExperienceList.push(testExp2);

const FeedScreen = ({navigation, route}) => {
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
            {ExperienceList.map((exp) => (
                    <ExperienceCard Experience={exp}/>
            ))}
            {/* <ExperienceCard Experience={testExp}/> */}
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