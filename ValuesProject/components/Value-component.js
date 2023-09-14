import React from 'react';
import { Text, View } from 'react-native';

/* Hoping to get this working similar to experience component and create 
 * an array to be displayed on the ExploreList then values can be chosen 
 * from and easily added/displayed in an Experience-component
 * Nazhone
 */
export default function Value({title}) {
    return(
        <View>
            <Text>{title}</Text>
        </View>
    );
};