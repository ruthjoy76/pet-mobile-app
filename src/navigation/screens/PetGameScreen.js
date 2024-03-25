import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import { MaterialIcons} from '@expo/vector-icons';

// Import images
import PetGame from '../../../assets/PetGame.png';



export default function PetGameScreen({ navigation }) {
  return (
   
      <View style={styles.container}>
        <View>
        <TouchableOpacity
      style={styles.circleButton}
      onPress={() => navigation.navigate("Game")}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} color="#5A2828" />
    </TouchableOpacity>
        </View>
       
            <Image
                source={PetGame}
                style={styles.imageStyle}
            /> 
                
        </View>
   
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    circleButton: {
      position: 'absolute',
      width: 60,
      height: 60,
      top: 30,
      left: 20,
      borderRadius: 30,
      backgroundColor: "#FFBA69",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      
      zIndex: 1, // Ensures the button is above the image
    },
    imageContainer: {
      flex: 1, // Ensure the image takes up the entire space
    },
    imageStyle: {
      flex: 1,
      width: undefined, // Use undefined to maintain aspect ratio
      height: undefined, // Use undefined to maintain aspect ratio
      resizeMode: 'cover', // Maintain aspect ratio and fill entire space
    },
  });
  
 

