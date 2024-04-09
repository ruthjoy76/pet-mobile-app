import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Modal, StyleSheet } from 'react-native';
import styles from '../styles/PetNameScreenStyles.android';
import ImageContainer from '../../components/ImageContainer'; // Import the ImageContainer component
import PetNameModal from '../../components/PetNameModal'; // Import the PetNameModal component

// Import images
import cat from '../../../assets/cat.png';
import dog from '../../../assets/dog.png';
import horse from '../../../assets/horse.png';
import bird from '../../../assets/bird.png';
import hamster from '../../../assets/hamster.png';
import rabbit from '../../../assets/rabbit.png';

const getImageSource = (animalName) => {
    switch (animalName) {
        case 'cat':
            return cat;
        case 'dog':
            return dog;
        case 'horse':
            return horse;
        case 'bird':
            return bird;
        case 'hamster':
            return hamster;
        case 'rabbit':
            return rabbit;
        default:
            return null; // Or provide a default image source
    }
};

const PetNameScreenAndroid = ({ navigation, route }) => {
    const { selectedAnimals } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [petName, setPetName] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const [petNames, setPetNames] = useState([]);

    const handleEnterPress = () => {
        navigation.navigate('MainTabs');
    };

    const handleChangeText = (text) => {
        setPetName(text);
        setIsEmpty(text === "");
    };

    const handleImageClick = (animal) => {
        setSelectedAnimal(animal);
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleSavePetName = () => {
        const updatedPetNames = [...petNames, { animal: selectedAnimal, name: petName }];
        setPetNames(updatedPetNames);
        setPetName(""); // Clear pet name input
        handleModalClose();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Write the name of your pet</Text>
                    </View>
                    <View style={styles.containerItem}>
                        {/* Replace View with ImageContainer */}
                        <ImageContainer>
                            {selectedAnimals.map((animal, index) => (
                                <TouchableOpacity key={index} onPress={() => handleImageClick(animal)}>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={getImageSource(animal)}
                                            style={styles.imageStyle}
                                        />
                                        <Text>{petNames.find(pet => pet.animal === animal)?.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ImageContainer>
                    </View>
                </View>
            </View>
            {/* Modal for entering pet name */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={modalStyles.centeredView}>
                    <PetNameModal
                        selectedAnimal={selectedAnimal}
                        petName={petName}
                        handleChangeText={handleChangeText}
                        handleSavePetName={handleSavePetName}
                        isEmpty={isEmpty}
                        getImageSource={getImageSource}
                    />
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});

export default PetNameScreenAndroid;
