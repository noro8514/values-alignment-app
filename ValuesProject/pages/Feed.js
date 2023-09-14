//Imports
import React from 'react';
import { StyleSheet, Text, Image, Button, View, ScrollView } from 'react-native';
import ExperienceCard from '../components/ExperienceCard'

//Functions
class Experience {
    constructor(title, body, values){
        this.title=title;
        this.body=body;
        this.values=values;
    }
}
const testExp = new Experience(
    "My Experience", 
    
    "this is my experience", 
    [
        {
            id: '0',
            title: 'Friendship'
        },
        {
            id: '1',
            title: 'Generosity'
        },
        {
            id: '2',
            title: 'Love'
        },
    ]);

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
                    expData={{title:testExp.title, imageName:require('../assets/lake-view.png')}}
                    valData={testExp.values}
                />
                <ExperienceCard 
                    expData={{title:'Mall Trip', imageName:require('../assets/mall-trip.png')}}
                    valData={[
                        {
                            id: '3',
                            title: 'Creativity'
                        },
                        {
                            id: '4',
                            title: 'Joy'
                        },
                        {
                            id: '2',
                            title: 'Love'
                        },
                    ]}
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