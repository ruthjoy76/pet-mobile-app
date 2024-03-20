import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Import images
import dog from '../../assets/dog.png';

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
            </View >

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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000000', 
        textAlign: 'left',  
        marginTop: 10,
        marginLeft: 20,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 10,
    },
    containerItem: {
        backgroundColor: '#fff',
        borderRadius: 22,
        margin: 20,
        marginTop: 5,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    checkedContainerItem: {
        backgroundColor: '#e5e5e5',
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
        marginLeft: 20,
        marginBottom: 5,
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
        marginTop: 20,
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
    button: {
        backgroundColor: '#FFEAD1',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginLeft: 10,
    },
    buttonText: {
        color: '#464646',
        fontSize: 16,
    },
    divider: {
        height: 1,
        width: '90%',
        alignSelf: 'center', 
        backgroundColor: '#464646',
        marginVertical: 10,
        marginBottom: 20,
    },
});
