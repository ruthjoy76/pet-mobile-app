import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from "react-native";
import styles from '../styles/PetNameScreenStyles.android';
import ImageContainer from '../../components/ImageContainer'; // Import the ImageContainer component

// Import images
import cat from '../../../assets/cat.png';
import dog from '../../../assets/dog.png';
import horse from '../../../assets/horse.png';
import bird from '../../../assets/bird.png';
import hamster from '../../../assets/hamster.png';

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
        default:
            return null; // Or provide a default image source
    }
};

export default function PetNameScreenAndroid({ navigation, route }) {
    const { selectedAnimals, _setSelectedAnimal } = route.params;
    const [_name, setName] = useState("");
    const [_isEmpty, setIsEmpty] = useState(true);

    const handleEnterPress = () => {
        navigation.navigate('MainTabs');
    };

    const handleChangeText = (text) => {
        setName(text);
        setIsEmpty(text === "");
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
                                <Image
                                    key={index}
                                    source={getImageSource(animal)}
                                    style={styles.imageStyle}
                                />
                            ))}
                        </ImageContainer>
                        
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
