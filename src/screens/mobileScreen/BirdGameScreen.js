import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/BirdGameScreenStyles';

import { MaterialIcons} from '@expo/vector-icons';

// Import images
import PetGame from '../../../assets/flappyBirdGame.png';



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


  
 

