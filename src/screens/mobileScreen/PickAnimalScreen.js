import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import CheckBox from 'expo-checkbox';
import styles from '../styles/PickAnimalScreenStyles';

//Import Images
import dog from '../../../assets/dog.png';
import cat from '../../../assets/cat.png';
import horse from '../../../assets/horse.png';
import bird from '../../../assets/bird.png';
import hamster from '../../../assets/hamster.png';

const animalsData = [
    { name: 'dog', image: dog },
    { name: 'cat', image: cat },
    { name: 'horse', image: horse },
    { name: 'bird', image: bird },
    { name: 'hamster', image: hamster }
];

const PickAnimalScreen = ({ navigation }) => {
    const [selectedAnimals, setSelectedAnimals] = useState([]);

    const handleAnimalSelection = (animal) => {
        const animalIndex = selectedAnimals.indexOf(animal);
        if (animalIndex === -1) {
            setSelectedAnimals([...selectedAnimals, animal]);
        } else {
            const updatedAnimals = [...selectedAnimals];
            updatedAnimals.splice(animalIndex, 1);
            setSelectedAnimals(updatedAnimals);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleAnimalSelection(item.name)}>
            <View style={styles.containerItem}>
                <View style={styles.subContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        value={selectedAnimals.includes(item.name)}
                        onValueChange={() => handleAnimalSelection(item.name)}
                        color="#5A2828"
                    />
                    <Text style={styles.containerText}>I have a {item.name}</Text>
                    <Image
                        source={item.image}
                        style={styles.imageStyle}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>Pick your animal</Text>
                </View>
                <FlatList
                    data={animalsData}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                    numColumns={2}
                />
                <TouchableOpacity
                    style={styles.enterButton}
                    onPress={() => {
                        navigation.navigate('PetName', { selectedAnimals });
                    }}
                >
                    <Text style={styles.enterButtonText}>Enter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PickAnimalScreen;
