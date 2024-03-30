import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/PetNameScreenStyles';

// Import images
import cat from '../../../assets/cat.png';
import dog from '../../../assets/dog.png';

export default function PetName({ navigation, route }) {
    const { selectedAnimal, petName } = route.params;
    const [name, setName] = useState(petName || '');
    const [isEditing, setIsEditing] = useState(true);

    const handleEnterPress = () => {
        navigation.navigate('MainTabs');
    };

    const handleChangeText = (text) => {
        setName(text);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    const handleInputFocus = () => {
        setIsEditing(false);
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
                            source={selectedAnimal === 'cat' ? cat : dog}
                            style={styles.imageStyle}
                        />                       
                    </View>
                    <View style={styles.petNameContainer}>
                    <Text style={styles.petName}>{name}</Text>
                </View>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={handleChangeText}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        placeholder={isEditing ? "Name of the pet" : "Name of the pet"}
                    />
                   
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleEnterPress}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        </View>
    );
}
