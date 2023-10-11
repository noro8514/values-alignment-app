//Imports
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Value } from '../components/MasterClasses';
import {ValueCard} from '../components/MasterComponents';

//Functions

//Explore List Screen
const ExploreListScreen = ({navigation, route}) => {
    const values = [
        new Value('Friendship', 'The emotions or conduct of friends; the state of being friends.'),
        new Value('Generosity', 'The quality of being kind and generous.'),
        new Value('Love', 'An intense feeling of deep affection.'),
        new Value('Creativity', 'The use of the imagination or original ideas, especially in the production of an artistic work.'),
        new Value('Joy', 'A feeling of great pleasure and happiness.'),
        new Value('Honesty', 'The quality of being honest.'),
        new Value('Integrity', 'The quality of being honest and having strong moral principles; moral uprightness.'),
        new Value('Respect', 'A feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements.'),
        new Value('Self-Respect', 'Pride and confidence in oneself; a feeling that one is behaving with honor and dignity.'),
        new Value('Courage', 'The ability to do something that frightens one; bravery.'),
        new Value('Self-Care', 'The practice of taking action to preserve or improve one\'s own health.'),
        new Value('Self-Compassion', 'Extending compassion to one\'s self in instances of perceived inadequacy, failure, or general suffering.'),
        new Value('Self-Confidence', 'A feeling of trust in one\'s abilities, qualities, and judgement.'),
        //etc..
    ];

    return (
        <View style={styles.container}>
            <Text>Explore List Screen</Text>
            <ScrollView horizontal={false}>
                {values.map((value) => (
                    <ValueCard Value={value} />
                ))}
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
        padding: 16,
    },
});

export default ExploreListScreen;