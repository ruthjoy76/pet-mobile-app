import { useState } from 'react';

const useEventHandler = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [petName, setPetName] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const [petNames, setPetNames] = useState([]);

    const handleEnterPress = (navigation) => () => navigation.navigate('Home');

    const handleChangeText = (text) => {
        setPetName(text);
        setIsEmpty(text === "");
    };

    const handleImageClick = (animal) => {
        setSelectedAnimal(animal);
        setModalVisible(true);
    };

    const handleModalClose = () => setModalVisible(false);

    const handleSavePetName = () => {
        // Create a copy of the existing petNames state
        const updatedPetNames = [...petNames];
        
        // Check if the selected animal already exists in the petNames state
        const existingPetIndex = updatedPetNames.findIndex(
            (pet) => pet.animal === selectedAnimal
        );
        
        if (existingPetIndex !== -1) {
            // If the animal exists, update the name
            updatedPetNames[existingPetIndex].name = petName;
        } else {
            // Otherwise, add a new entry for the animal
            updatedPetNames.push({ animal: selectedAnimal, name: petName });
        }
        
        // Update the state with the modified petNames array
        setPetNames(updatedPetNames);
        
        // Clear the current petName input
        setPetName("");
        
        // Close the modal
        handleModalClose();
    };
    

    return {
        modalVisible,
        selectedAnimal,
        petName,
        isEmpty,
        petNames,
        setPetName,
        handleEnterPress,
        handleChangeText,
        handleImageClick,
        handleSavePetName,
        handleModalClose
    };
};

export default useEventHandler;
