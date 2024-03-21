import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import dog from '../../../assets/dog.png';
import cat from '../../../assets/cat.png';

const PickAnimalScreen = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState([false, false]);

    const toggleCheckbox = (index) => {
        const updatedState = isChecked.map((item, i) => i === index);
        setIsChecked(updatedState);
    };

    const handleContainerPress = () => {
        navigation.navigate('MainTabs');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 100,
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    subHeaderText: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
        flex: 1,
    },
    containerItem: {
        backgroundColor: '#fff',
        height: 120,
        borderRadius: 22,
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    checkedContainerItem: {
        backgroundColor: '#e5e5e5',
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828',
        textAlign: 'left',
        marginLeft: 25,
    },
    subHeader: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    checkbox: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: '#5A2828',
        borderRadius: 7,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: '#5A2828',
    },
    checkmark: {
        color: 'white',
    },
    imageStyle: {
        width: 67,
        height: 67,
        borderRadius: 10,
        marginBottom: 30,
        marginLeft: 20,
        marginTop: 30,
    },
});

export default PickAnimalScreen;
