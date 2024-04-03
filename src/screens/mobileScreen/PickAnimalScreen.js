import { View, Text, TouchableOpacity, Image} from "react-native";
import styles from '../styles/PickAnimalScreenStyles';

//Import Images
import dog from '../../../assets/dog.png';
import cat from '../../../assets/cat.png';

const PickAnimalScreen = ({ navigation }) => {
    const handleAnimalSelection = (animal) => {
        navigation.navigate('PetName', { selectedAnimal: animal });
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeaderText}>Pick your animal</Text>
                </View>

                <TouchableOpacity onPress={() => handleAnimalSelection('dog')}>
                    <View style={styles.containerItem}>
                        <View style={styles.subContainer}>
                            <Text style={styles.containerText}>I have a dog</Text>
                            <Image
                                source={dog}
                                style={styles.imageStyle}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleAnimalSelection('cat')}>
                    <View style={styles.containerItem}>
                        <View style={styles.subContainer}>
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
};



export default PickAnimalScreen;
