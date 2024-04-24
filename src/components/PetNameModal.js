import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../components/styles/PetNameModalStyle'; // Import styles for the modal view
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for the camera icon

const PetNameModal = ({ selectedAnimal, petName, handleChangeText, handleSavePetName, isEmpty, getImageSource }) => {
    return (
        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Pet Name</Text>
            <TouchableOpacity onPress={() => {/* Handle image change here */}}>
                <Image source={getImageSource(selectedAnimal)} style={styles.modalImage} />
                <FontAwesome name="camera" size={16} color="#5A2828" style={styles.cameraIcon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Enter pet name"
                value={petName}
                onChangeText={handleChangeText}
            />
            {isEmpty && <Text style={styles.errorText}>Pet name cannot be empty</Text>}
            <TouchableOpacity onPress={handleSavePetName} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PetNameModal;
