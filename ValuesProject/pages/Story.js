import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, FlatList, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import MasterValues from '../components/MasterValues.json';

const { height } = Dimensions.get('window'); // get height to fill screen

/* Hide bottom navigation bar */
export function useHideBottomBar() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
        return () =>
            navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
    }, [navigation]);
}

/* story data */
const valueData = [
    {
        "title": "Achievement",
        "definition": "Drive to accomplish a successful result that is noteworthy or admirable",
        "hasBeenUsed": false,
        "timesUsedThisMonth": 0,
        "numExperiences": 0,
        "color": "",
        "icon": ""
      },
      {
        "title": "Adventure",
        "definition": "Planning and experiencing events that are extraordinary, exciting or daring.",
        "hasBeenUsed": false,
        "timesUsedThisMonth": 0,
        "numExperiences": 0,
        "color": "",
        "icon": ""
      },
      {
        "title": "Authenticity",
        "definition": "Acting in ways that show your true self and how you feel. Genuine expression.",
        "hasBeenUsed": false,
        "timesUsedThisMonth": 0,
        "numExperiences": 0,
        "color": "",
        "icon": ""
      },
];

const StoryScreen = () => {
    useHideBottomBar();
    const navigation = useNavigation();

    const [valueIndex, setValueIndex] = useState(0);

    useEffect(() => {
        // Function to switch to the next value after a set duration (e.g., 5 seconds)
        var nextIndex = valueIndex;
        const timer = setTimeout(() => {
            nextIndex += 1;
            if(nextIndex < valueData.length){
                setValueIndex(nextIndex);
            }
            else {
                navigation.navigate('Home1')
            }
        }, 5000); // Change the delay (in milliseconds) to switch to the next color
    
        // Clear the timer when the component unmounts or when the current color index changes
        return () => clearTimeout(timer);
    }, [valueIndex]);
    
    const currentValue = valueData[valueIndex];
    
    return (
        <View style={[styles.storyContainer]}>
            
            <TouchableOpacity onPress={() => navigation.navigate('Home1')} style={styles.exit}>
                <Text style={styles.text}>X</Text>
            </TouchableOpacity>
            <Text style={styles.text}>you value</Text>
            <Text style={styles.h1}>{currentValue.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  h1: {
    color: '#fff',
    fontWeight: "900",
    fontSize: 40,
    lineHeight: 50,
    // fontFamily: 'Lexend',
  },
  text: {
    color: '#fff',
    // fontFamily: 'Lexend',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 22.5,
  },
  exit: {
    position: 'absolute',
    top: 40,
    right: 40,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default StoryScreen;
