// PetNameModal.js

import React from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const PetNameModal = ({ selectedAnimal, petName, handleChangeText, handleSavePetName, isEmpty, getImageSource }) => {
    return (
        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Enter Pet Name</Text>
            <Image
                source={getImageSource(selectedAnimal)}
                style={styles.modalImage}
            />
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
        borderRadius: 5,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
});

export default PetNameModal;
