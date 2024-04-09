import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from '../../src/screens/styles/PickAnimalScreenStyles';


const CheckBoxItem = ({ item, selectedAnimals, handleAnimalSelection }) => {
    return (
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
};

export default CheckBoxItem;
