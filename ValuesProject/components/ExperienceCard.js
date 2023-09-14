import React from 'react';
import { FlatList, StyleSheet, Text, Image, Button, View, ScrollView } from 'react-native';
import Value from './Value-component.js'

/* Component with props to be populated upon render, kinda like a form
 * Nazhone
 */
export default function Experience({expData, valData}) {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.title}>{expData.title}</Text>

                <Button
                    style={styles.button}
                    title="+"
                    onPress={() =>
                        navigation.navigate('Experience')
                    }
                />
            </View>

            <Image 
                style={styles.image}
                source={expData.imageName}
            />

            <ScrollView horizontal={true}>  
                <FlatList
                    data={valData}
                    renderItem={({item}) => <Value title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>  
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 4
    },
    title: {
        flex: 1
    },
    image: {
        width: 350
    }
});