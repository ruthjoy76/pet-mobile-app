import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/GameScreenStyles';


// Import images
import dogGame from '../../../assets/dogGame.png';
import birdGame from '../../../assets/birdGame.png';
import button from '../../../assets/button.png';

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Hry</Text>
            </View>

            <View style={styles.subContainer}>
            <View style={styles.containerItem}>
                <View style={styles.imageContainer}>
                    <Text style={styles.containerText}>Skoky so Štvornohým Kamarátom</Text>
                    <Text style={styles.containerParagraphText}>Dosiahni rekordné skóre v bežaní so svojím verným spoločníkom!</Text>
                    <Image
                        source={dogGame}
                        style={styles.imageStyle}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={button}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerItem}>
                <View style={styles.imageContainer}>
                    <Text style={styles.containerText}>Prekážkový let</Text>
                    <Text style={styles.containerParagraphText}>Prekonávaj prekážky s Vtáčikom v vzrušujúcej hre!</Text>
                    <Image
                        source={birdGame}
                        style={styles.imageStyle}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={button}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
                </View> 
            </View>   
        </View>
    );
}

