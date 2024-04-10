import React from 'react';
import { View, Text, TextInput, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for camera icon

const PetNameModal = ({ selectedAnimal, petName, handleChangeText, handleSavePetName, isEmpty, getImageSource }) => {
    return (
        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Pet Name</Text>
            {/* Replace the Image with TouchableOpacity for the camera icon */}
            <TouchableOpacity onPress={() => {/* Handle image change here */}}>
                <Image
                    source={getImageSource(selectedAnimal)}
                    style={styles.modalImage}
                />
                <FontAwesome name="camera" size={14} color="#5A2828" style={styles.cameraIcon} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Enter pet name"
                value={petName}
                onChangeText={handleChangeText}
            />
            <Button
                title="Save"
                onPress={handleSavePetName}
                disabled={isEmpty}
                color={isEmpty ? '#ccc' : '#5A2828'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        opacity: 0.85,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 50,
    },
    cameraIcon: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
       
        borderWidth: 1,
        borderColor: '#5A2828',
        bottom: 9,
        right: 8,
        transform: [{ translateX: 5 }, { translateY: 0 }],
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 20,
    },
});

export default PetNameModal;
