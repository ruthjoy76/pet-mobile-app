import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/PickAnimalScreenStyles';

//Import Images
import dog from '../../../assets/dog.png';
import cat from '../../../assets/cat.png';

const PickAnimalScreen = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState([false, false]);

    const toggleCheckbox = (index) => {
        const updatedState = isChecked.map((item, i) => i === index);
        setIsChecked(updatedState);
    };

    const handleContainerPress = () => {
        navigation.navigate('PetName');
    };

    return (
        <View style={styles.container}>
           
            <View style={styles.mainContainer}>
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>Pick your animal</Text>
            </View>

            <TouchableOpacity onPress={handleContainerPress}>
                <View style={[styles.containerItem, isChecked[0] && styles.checkedContainerItem]}>
                    <View style={styles.subContainer}>
                        <View style={[styles.checkbox, isChecked[0] && styles.checked]}>
                            {isChecked[0] && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.containerText}>I have a dog</Text>
                        <Image
                            source={dog}
                            style={styles.imageStyle}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleContainerPress}>
                <View style={[styles.containerItem, isChecked[1] && styles.checkedContainerItem]}>
                    <View style={styles.subContainer}>
                        <View style={[styles.checkbox, isChecked[1] && styles.checked]}>
                            {isChecked[1] && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.containerText}>I have a cat</Text>
                        <Image
                            source={cat}
                            style={styles.imageStyle}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    );
}



export default PickAnimalScreen;
