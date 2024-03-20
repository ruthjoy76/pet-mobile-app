import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

const IntroScreen = ({ navigation }) => {
  const goToPickAnimalScreen = () => {
    navigation.navigate('Pick'); // Navigate to the Pick Animal screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Wrap the Image component inside TouchableOpacity */}
      <TouchableOpacity onPress={goToPickAnimalScreen}>
        <Image
          source={require('../../assets/button.png')} // Specify the path to your image
          style={{ width: 150, height: 150 }} // Adjust the width and height as needed
        />
      </TouchableOpacity>
     
    </View>
  );
};

export default IntroScreen;
