import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView} from "react-native";
import styles from '../styles/PetNameScreenStyles.android';

// Import images
import cat from '../../../assets/cat.png';
import dog from '../../../assets/dog.png';

export default function PetNameScreen({ navigation, route }) {
    const { selectedAnimal, setSelectedAnimal } = route.params;
    const [name, setName] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

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
                        <View style={styles.imageContainer}>
                            <Image
                                source={selectedAnimal === 'cat' ? cat : dog}
                                style={styles.imageStyle}
                            />
                        </View>
                        
                        <TextInput
                            style={styles.input}   
                        />
                        <TouchableOpacity style={styles.buttonContainer} onPress={handleEnterPress}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
