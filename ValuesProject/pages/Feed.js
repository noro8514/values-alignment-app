//Imports
import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';

//Functions
const Memory = () =>{
    return(
        <View>
            <Text>Lake View</Text>
            { <Button
                style={styles.button}
                title="+"
                onPress={() =>
                    navigation.navigate('Experience')
                }
            /> }
            <Image
                source={require('../assets/lake-view.png')}
            />
            <Text>Friendship</Text><Text>Love</Text><Text>Generosity</Text>
        </View>
    );
};


//Feed Screen
const FeedScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
            <Memory />
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