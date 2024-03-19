import * as React from 'react';
import { View, Text } from 'react-native';

export default function GameScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Hry</Text>
            </View>

            <View style={styles.containerItem}>
                <Text style={styles.containerText}>Skoky so Štvornohým Kamarátom</Text>
                <Text style={styles.containerParagraphText}>Dosiahni rekordné skóre v bežaní so svojím verným spoločníkom!</Text>
            </View>
            
            <View style={styles.containerItem}>
                <Text style={styles.containerText}>Prekážkový let</Text>
                <Text style={styles.containerParagraphText}>Prekonávaj prekážky s Vtáčikom v  vzrušujúcej hre!</Text>
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
        backgroundColor: 'white',
        borderRadius: 22,
        margin: 20,
        padding: 10,
        height: 120, 
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#5A2828', 
        textAlign: 'left',  
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
};
