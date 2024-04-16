import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../components/styles/PetNameModalStyle'; // Import styles for the modal view
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for camera icon

const PetNameModal = ({ selectedAnimal, petName, handleChangeText, handleSavePetName, getImageSource }) => {
    return (
        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Pet Name</Text>
            {/* Replace the Image with TouchableOpacity for the camera icon */}
            <TouchableOpacity onPress={() => {/* Handle image change here */}}>
                <Image
                    source={getImageSource(selectedAnimal)}
                    style={styles.modalImage}
                />
                <FontAwesome name="camera" size={16} color="#5A2828" style={styles.cameraIcon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Enter pet name"
                value={petName}
                onChangeText={handleChangeText}
            />
            <TouchableOpacity onPress={handleSavePetName} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PetNameModal;
