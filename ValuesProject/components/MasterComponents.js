import React from 'react';
import { FlatList, StyleSheet, Text, Image, Button, View, ScrollView } from 'react-native';
//import ValueTag from './ValueTag';
import { Experience, Value } from './MasterClasses';

/* Components with props to be populated upon render, kinda like a form
 * Nazhone
 */
export function ExperienceCard({Experience}, {navigation}) {
    return(
        <View style={styles.ExpCardContainer}>
            <View style={styles.Header}>
                <Text style={styles.Exptitle}>{Experience.title}</Text>

                <Button
                    style={styles.button}
                    title="+"
                    onPress={() =>
                        //Needs to navigate to reflection page or create a popup component
                        //navigation.navigate('NewExperience')
                        console.log("Add Reflection")
                    }
                />
            </View>

            <Image 
                style={styles.image}
                source={Experience.imageName}
            />

            <ScrollView horizontal={true}>  
                {/* <FlatList
                    data={Experience.values}
                    renderItem={({item}) => <ValueTag Value={item}/>}
                    keyExtractor={item => item.title}
                /> */}
                {/* Since theres only 3 tags, we could do this */}
                <ValueTag Value={Experience.values[0]} style={styles.ValTag}/>
                <ValueTag Value={Experience.values[1]}/>
                <ValueTag Value={Experience.values[2]}/>
            </ScrollView>
        </View>
    );
};

//Value component to be used on the explore page
export function ValueCard({Value}) {
    return(
        <View style={styles.valCard}>
            <Text style={styles.valTitle}>{Value.title}</Text>
            <Text style={styles.valDef}>{'"'+Value.definition+'"'}</Text>
            {/* To show the values background data: */}
            <Text style={styles.valDef}>Times Used This Month: {Value.timesUsedThisMonth}</Text>
            <Text style={styles.valDef}>Has Been Used: {Value.hasBeenUsed}</Text>
        </View>
    );
}

// Value Tag to be used on Experience components
export function ValueTag({Value}) {
    return(
        <View style={styles.ValTag}>
            <Text style={styles.valTagTitle}>{Value.title}</Text>
        </View>
    );
    //Value.incrementTimesUsed();
};

const styles = StyleSheet.create({
    //ExperienceCard Styles
    ExpCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        //To see how each card is spaced
        borderColor: 'black',
        borderWidth: 1,
        //To center the cards
        marginLeft: 10,
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    Exptitle: {
        flex: 1,
        fontSize: 30,
        fontWeight: 'normal',
    },
    image: {
        width: 350,
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 2,
        marginBottom: 10,
    },
    
    //ValueTag Styles
    ValTag: {
        width: 150,
        height: 40,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        margin: 8,
    },
    valTagTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    },
    //ValueCard Styles
    valCard: {
        width: '90%',
        height: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        margin: 8,
    },
    valTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        },
    valDef: {
        fontSize: 10,
        fontWeight: 'normal',
        marginTop: 5,
    },
});