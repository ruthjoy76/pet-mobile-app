import { useState } from 'react';

const useEventHandler = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [petName, setPetName] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);
    const [petNames, setPetNames] = useState([]);

    const handleEnterPress = (navigation) => () => navigation.navigate('MainTabs');

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
        const updatedPetNames = [...petNames, { animal: selectedAnimal, name: petName }];
        setPetNames(updatedPetNames);
        setPetName("");
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
