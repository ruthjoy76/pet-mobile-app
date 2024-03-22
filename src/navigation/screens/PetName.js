import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/PetNameStyles';

// Import images
import cat from '../../../assets/cat.png';

export default function PetName({ navigation }) {
    const [name, setName] = useState('');

    const handleEnterPress = () => {
        navigation.navigate('MainTabs');
    };

    const handleChangeText = (text) => {
        setName(text);
    };



    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Write the name of your pet</Text>
                </View>
                <View style={styles.containerItem}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={cat}
                            style={styles.imageStyle}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={handleChangeText}
                        placeholder="Name of the pet"
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleEnterPress}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
    );
}
