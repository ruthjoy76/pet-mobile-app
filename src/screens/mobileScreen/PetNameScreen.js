import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/PetNameScreenStyles';
import ImageContainer from '../../components/ImageContainer';
import PetNameModal from '../../components/PetNameModal';
import getImageSource from '../../components/AnimalImages';

const PetNameScreen = ({ navigation, route }) => {
    const { selectedAnimals } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [petNames, setPetNames] = useState([]);
    const [petName, setPetName] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    // Load pet names from AsyncStorage
    useEffect(() => {
        const loadPetNames = async () => {
            try {
                const storedPetNames = await AsyncStorage.getItem('petNames');
                if (storedPetNames) {
                    setPetNames(JSON.parse(storedPetNames));
                }
            } catch (error) {
                console.error('Error loading pet names:', error);
            }
        };

        loadPetNames();
    }, []);

    // Save pet names to AsyncStorage
    const handleSavePetName = async () => {
        if (!petName.trim()) {
            setIsEmpty(true);
            return;
        }

        const updatedPetNames = petNames.map(pet => 
            pet.animal === selectedAnimal ? { ...pet, name: petName } : pet
        );

        if (!updatedPetNames.find(pet => pet.animal === selectedAnimal)) {
            updatedPetNames.push({ animal: selectedAnimal, name: petName });
        }

        setPetNames(updatedPetNames);

        // Save updated pet names to AsyncStorage
        try {
            await AsyncStorage.setItem('petNames', JSON.stringify(updatedPetNames));
        } catch (error) {
            console.error('Error saving pet names:', error);
        }

        setModalVisible(false);
        setPetName('');
    };

    const handleChangeText = (text) => {
        setPetName(text);
        setIsEmpty(false);
    };

    const handleImageClick = (animal) => {
        setSelectedAnimal(animal);
        const pet = petNames.find(pet => pet.animal === animal);
        setPetName(pet ? pet.name : '');
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.circleButton} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="#5A2828" />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Write the name of your pet</Text>
                    </View>
                    <ImageContainer>
                        {selectedAnimals.map((animal, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImageClick(animal)}>
                                <View style={styles.imageContainer}>
                                    <Image source={getImageSource(animal)} style={styles.imageStyle}/>
                                    <View style={styles.editIconContainer}>
                                        <FontAwesomeIcon icon={faEdit} size={18} color="#5A2828" style={styles.editIcon} />
                                    </View>
                                    <Text style={styles.animalName}>{petNames.find(pet => pet.animal === animal)?.name || ''}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ImageContainer>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
            >
                <View style={styles.centeredView}>
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
};

export default PetNameScreen;
