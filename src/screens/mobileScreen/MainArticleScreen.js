import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import styles from '../styles/ArticleScreenStyles'; 

export default function MainArticleScreen({ navigation, route }) {

    return (
        <View style={styles.container}>
           
            <View style={styles.subContainer}>
            
                 <Text style={styles.subHeaderText}>Ako sa postarať o zvieratko?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('One')}>
                    <View style={styles.containerItem}>
                        <Text style={styles.containerText}>Ako správne vyčistiť zuby psíkovy?</Text>
                        <Text style={styles.containerParagraphText}>Zisti, ako správne integrovať čistenie zubov do denného režimu vášho psíka a vytvorte pozitívnu skúsenosť.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Two')}>
                    <View style={styles.containerItem}>
                        <Text style={styles.containerText}>Spoznajte svoju mačku lepšie</Text>
                        <Text style={styles.containerParagraphText}>Mačky sú krásne a tajomné tvory (stvorenia). </Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Three')}>
                    <View style={styles.containerItem}>
                        <Text style={styles.containerText}>Mačka sa bojí hlasných zvukov – čo robiť?</Text>
                        <Text style={styles.containerParagraphText}>Ako navyknúť mačku na zvuky v byte.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Four')}>
                    <View style={styles.containerItem}>
                        <Text style={styles.containerText}>Prečo mačka slintá z úst?</Text>
                        <Text style={styles.containerParagraphText}>Niektorí majitelia mačiek môžu u svojich miláčikov zaznamenať nadmerné slinenie. Čo nám to môže povedať?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
