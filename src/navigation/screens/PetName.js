import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/PetNameStyles';

// Import images
import cat from '../../../assets/cat.png';
import button from '../../../assets/button.png';

export default function PetName({ navigation }) {
    const handleContainerPress = () => {
        navigation.navigate('MainTabs');
    };

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Write the name of your pet</Text>
            </View>
            <View style={styles.containerItem}>
                <View style={styles.imageContainer}>
                    <Text style={styles.containerText}>Skoky so Štvornohým Kamarátom</Text>
                    <Text style={styles.containerParagraphText}>Dosiahni rekordné skóre v bežaní so svojím verným spoločníkom!</Text>
                    <Image
                        source={cat}
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

