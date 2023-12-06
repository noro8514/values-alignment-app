import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const storiesData = [
  // Data for stories: You can fetch this from an API or define locally
  { id: 1, username: 'user1', imageUrl: 'https://example.com/image1.jpg' },
  { id: 2, username: 'user2', imageUrl: 'https://example.com/image2.jpg' },
  // Add more story objects as needed
];

const Story = ({ username, imageUrl }) => (
  <View style={styles.storyContainer}>
    <Image source={{ uri: imageUrl }} style={styles.storyImage} />
    <Text style={styles.username}>{username}</Text>
  </View>
);

const StoryScreen = () => {
  return (
    <FlatList
      data={storiesData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Story username={item.username} imageUrl={item.imageUrl} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    margin: 10,
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
