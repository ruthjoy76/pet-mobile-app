import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Modal,  Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PetNameScreenStyles';
import ImageContainer from '../../components/ImageContainer';
import PetNameModal from '../../components/PetNameModal';
import getImageSource from '../../components/AnimalImages';
import useEventHandler from '../../components/useEventHandler';

const PetNameScreen = ({ navigation, route }) => {
    const { selectedAnimals } = route.params;
    const {
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
    } = useEventHandler();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Write the name of your pet</Text>
                    </View>
                    <View style={styles.containerItem}>
                        <ImageContainer>
                            {selectedAnimals.map((animal, index) => (
                                <TouchableOpacity key={index} onPress={() => handleImageClick(animal)}>
                                    <View style={styles.imageContainer}>
                                        <Image source={getImageSource(animal)} style={styles.imageStyle}/>
                                        <View style={styles.editIconContainer}>
                                            <FontAwesomeIcon icon={faEdit} size={18} color='#5A2828' style={styles.editIcon} />
                                        </View>
                                        <Text>{petNames.find(pet => pet.animal === animal)?.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity style={styles.enterButton} onPress={handleEnterPress(navigation)}>
                                <Text style={styles.enterButtonText}>Enter</Text>
                            </TouchableOpacity>
                        </ImageContainer>
                    </View>
                </View>
            </View>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={handleModalClose}>
                <View style={styles.centeredView}>
                    <PetNameModal selectedAnimal={selectedAnimal} petName={petName} handleChangeText={handleChangeText} handleSavePetName={handleSavePetName} isEmpty={isEmpty} getImageSource={getImageSource} />
                </View>
            </Modal>
        </SafeAreaView>
    );
}


export default PetNameScreen;