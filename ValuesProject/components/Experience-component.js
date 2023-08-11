import React from 'react';
import { FlatList, StyleSheet, Text, Image, Button, View } from 'react-native';
import Value from '../components/Value-component.js'

export default function Experience({expData, valData}) {
    return(
        <View>
            <Text style={styles.title}>{expData.title}</Text>

            <Button
                style={styles.button}
                title="+"
                onPress={() =>
                    navigation.navigate('Experience')
                }
            />

            <Image source={expData.imageName}/>

            <FlatList
                data={valData}
                renderItem={({item}) => <Value title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
});