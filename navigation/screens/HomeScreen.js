import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome in PetMachine</Text>
            </View>
            <Text style={styles.subHeaderText}>Ako sa postarať o zvieratko?</Text>
            <View style={styles.containerItem}>
                <Text style={styles.containerText}>Ako správne vyčistiť zuby psíkovy?</Text>
                <Text style={styles.containerParagraphText}>Zisti, ako správne integrovať čistenie zubov do denného režimu vášho psíka a vytvorte pozitívnu skúsenosť.</Text>
            </View>
            
            <View style={styles.containerItem}>
                <Text style={styles.containerText}>Ako nakŕmiť svoju mačičku?</Text>
                <Text style={styles.containerParagraphText}>Zabezpeč svojej mačke kvalitné krmivo, ktoré obsahuje všetky živiny, vitamíny a minerály, ktoré potrebuje pre svoje zdravie.</Text>
            </View>

            <View style={styles.containerItem}>
                <Text style={styles.containerText}>Naučenie nových trikov a zručností</Text>
                <Text style={styles.containerParagraphText}>Tréning a výcvik sú dôležitou súčasťou starostlivosti o domácich miláčikov. Venujte čas na učenie vášho psa alebo iných zvierat novým trikom a zručnostiam.</Text>
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
        marginLeft: 25,
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
