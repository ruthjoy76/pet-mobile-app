import React, { useRef } from "react";
import { View, TouchableOpacity, Animated } from "react-native";

export default function IntroScreen({ navigation }) {
  const moveAnimation = useRef(new Animated.Value(0)).current;

  const goToPickAnimalScreen = () => {
    navigation.navigate('Welcome'); // Navigate to the Pick Animal screen
  };

  const handlePress = () => {
    // Add animation here
    Animated.sequence([
      Animated.timing(moveAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(moveAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start(goToPickAnimalScreen);
  };

  const animatedStyle = {
    transform: [
      {
        translateY: moveAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20] // Adjust the distance the image moves
        })
      }
    ]
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Image
          source={require('../../../assets/button.png')}
          style={[{ width: 150, height: 150 }, animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  );
}
