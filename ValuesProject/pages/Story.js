import React, { useState, useEffect } from 'react';
import { Button, View, FlatList, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');
export function useHideBottomBar() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
        return () =>
            navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
    }, [navigation]);
}

// const storiesData = [
//   // Data for stories: You can fetch this from an API or define locally
//   { id: 1, username: 'user1', imageUrl: 'https://example.com/image1.jpg' },
//   { id: 2, username: 'user2', imageUrl: 'https://example.com/image2.jpg' },
//   // Add more story objects as needed
// ];

// const Story = ({ username, imageUrl }) => (
//   <View style={styles.storyContainer}>
//     <Image source={{ uri: imageUrl }} style={styles.storyImage} />
//     <Text style={styles.username}>{username}</Text>
//   </View>
// );

const StoryScreen = () => {
    useHideBottomBar();
    const navigation = useNavigation();

    const colorsData = ['black', 'blue', 'green']; // Define the colors to switch between
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        // Function to switch to the next color after a set duration (e.g., 5 seconds)
        var nextIndex = currentColorIndex;
        const timer = setTimeout(() => {
            nextIndex += 1;
            if(nextIndex < colorsData.length){
                setCurrentColorIndex(nextIndex);
            }
            else {
                navigation.navigate('Home1')
            }
        }, 5000); // Change the delay (in milliseconds) to switch to the next color
    
        // Clear the timer when the component unmounts or when the current color index changes
        return () => clearTimeout(timer);
    }, [currentColorIndex]);
    
    const currentColor = colorsData[currentColorIndex];
    
    return (
        // <FlatList
        // data={storiesData}
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // keyExtractor={(item) => item.id.toString()}
        // renderItem={({ item }) => (
        //     <Story username={item.username} imageUrl={item.imageUrl} />
        // )}
        // />
        
        <View style={[styles.storyContainer, { backgroundColor: currentColor }]}>
            <Button
                title="X"
                onPress={() => navigation.navigate('Home1')}
            />
            <Text style={styles.text}>Current Color: {currentColor}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'pink',
  },
  username: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default StoryScreen;
