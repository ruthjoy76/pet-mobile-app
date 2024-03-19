import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// Import images
import dogGame from '../../assets/dogGame.png';
import birdGame from '../../assets/birdGame.png';
import button from '../../assets/button.png';

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Hry</Text>
            </View>

            <View style={styles.containerItem}>
                <View style={styles.imageContainer}>
                    <Text style={styles.containerText}>Skoky so Štvornohým Kamarátom</Text>
                    <Text style={styles.containerParagraphText}>Dosiahni rekordné skóre v bežaní so svojím verným spoločníkom!</Text>
                    <Image
                        source={dogGame}
                        style={styles.imageStyle}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={button}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerItem}>
                <View style={styles.imageContainer}>
                    <Text style={styles.containerText}>Prekážkový let</Text>
                    <Text style={styles.containerParagraphText}>Prekonávaj prekážky s Vtáčikom v vzrušujúcej hre!</Text>
                    <Image
                        source={birdGame}
                        style={styles.imageStyle}
                    />
                </View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image
                        source={button}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>    
        </View>
    );
}

const styles = {
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
        marginLeft: 20,
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 22,
        margin: 20,
        padding: 10,
        height: 180,
    },
    imageContainer: {
        flex: 1,
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 5,
    },
    containerParagraphText: {
        fontSize: 14,
        fontWeight: '300',
        color: '#5A2828', 
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 20,
    },
    imageStyle: {
        width: 150, 
        height: 100, 
        borderRadius: 10, 
        marginBottom: 20, 
        marginLeft: 20,
        marginTop: 10, 
    },
    buttonContainer: {
        marginRight: 20,
        alignItems: 'flex-end', // Align button to the right
        justifyContent: 'flex-end', // Align button to the bottom
        marginTop: 90, // 
    },
    buttonImage: {
        width: 56,
        height: 56,
        resizeMode: 'contain',
    },
};
