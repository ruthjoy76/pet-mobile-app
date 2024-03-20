import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/HomeScreenStyles'; 

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome in PetMachine</Text>
            </View>
            <View style={styles.subContainer}>
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
        </View>
    );
}
