import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, Animated, Easing, StyleSheet, Image, Text } from "react-native";

export default function IntroScreen({ navigation }) {
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 3000,
      easing: Easing.elastic(3),
      useNativeDriver: true
    }).start(goToMainTabs);
  }, []);

  const goToMainTabs = () => {
    setTimeout(() => {
      navigation.navigate('MainTabs'); // Navigate to the MainTabs screen after a delay
    }, 2500); // Adjust the delay time as needed
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={goToMainTabs}>
        <Animated.View style={[styles.circle, { transform: [{ scale: scaleAnimation }] }]}>
          <Text style={styles.welcomeText}>Welcome in PetMachine</Text>
          <Image
            source={require('../../../assets/welcome.png')}
            style={styles.pet}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 550,
    height: 550,
    borderRadius: 275, // Half of width/height for a perfect circle
    backgroundColor: '#FFEAD1',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    position: 'absolute',
    bottom: 100,
    zIndex: 1
  },
  pet: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
