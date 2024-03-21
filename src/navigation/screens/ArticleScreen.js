import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/ArticleScreenStyles';

// Import images
import dog from '../../../assets/dog.png';

export default function HomeScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState([false, false, false]);

    const toggleCheckbox = (index) => {
        const updatedState = isChecked.map((item, i) => i === index);
        setIsChecked(updatedState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Úlohy</Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.subHeader}>
                    <Image
                        source={dog}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.subHeaderText}>Psík zlatunký</Text>
                </View>
                <View style={[styles.containerItem, isChecked[0] && styles.checkedContainerItem]}>
                    <TouchableOpacity onPress={() => toggleCheckbox(0)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.checkbox, isChecked[0] && styles.checked]}>
                                {isChecked[0] && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.containerText}>Tréning skoku</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5, marginLeft: 35 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Učenie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Produktivita</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.containerItem, isChecked[1] && styles.checkedContainerItem]}>
                    <TouchableOpacity onPress={() => toggleCheckbox(1)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.checkbox, isChecked[1] && styles.checked]}>
                                {isChecked[1] && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.containerText}>Musím nakŕmiť mačičku</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5, marginLeft: 35 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Potrava</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}>
                    <Text></Text>
                </View>
                <View style={[styles.containerItem, isChecked[2] && styles.checkedContainerItem]}>
                    <TouchableOpacity onPress={() => toggleCheckbox(2)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.checkbox, isChecked[2] && styles.checked]}>
                                {isChecked[2] && <Text style={styles.checkmark}>✓</Text>}
                            </View>
                            <Text style={styles.containerText}>Trénovanie na záchod</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 5, marginLeft: 35 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Učenie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Produktivita</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* Circle button with plus symbol */}
            <TouchableOpacity style={styles.circleButton}>
                <Text style={styles.plusSymbol}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

