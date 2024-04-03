import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons} from '@expo/vector-icons';
import styles from '../styles/PetArticleScreenStyles';

// Import images
import dogArticle from '../../../assets/dogArticle.png';

const BulletPoint = ({ text }) => {
  return (
    <View style={styles.bulletContainer}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
};

export default function PetArticleScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View>
        <TouchableOpacity
      style={styles.circleButton}
      onPress={() => navigation.navigate("Home")}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} color="#5A2828" />
    </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.header}>Naučenie nových trikov a zručností</Text>
            <Text style={styles.subheader}>Ako umývať zúbky svojmu psíkovi:</Text>
                <Text style={styles.text}>Krok 1: Priprav si potrebné veci</Text>
          
                    <BulletPoint text="Získaj špeciálnu zubnú kefku pre psov alebo mäkký zubný prstencový návlek." />
                    <BulletPoint text="Kúp si špeciálnu zubnú pastu pre psov, ktorá je zdravá pre tvojho psíka." />
                <Text style={styles.text}>Krok 2: Zvykni psíka na dotyk</Text>
                    <BulletPoint text="Začni pomaly a nežne. Hladkaj psíka na brade a postupne mu otváraj ústa, aby si zvykol na dotyk v tejto oblasti." />
    
                        <Image
                            source={dogArticle}
                            style={styles.imageStyle}
                        /> 
                <Text style={styles.text}>Krok 3: Zoznámte ho s návlekom</Text>
                    <BulletPoint text="Než začneš používať kefku, zoznám psíka so zubným prstencovým návlekom. Nech ho nosí na zúbkoch, kým si naň nezvykne" />
                <Text style={styles.text}>Krok 4: Naneste pastu</Text>
                    <BulletPoint text="Keď je psík pohodlný s návlekom, naneste malé množstvo zubnej pasty na kefku alebo návlek." />
                <Text style={styles.text}>Krok 5: Umývanie zúbkov</Text>
                    <BulletPoint text="Pomaly a jemne umývaj psíkovi zúbky kruhovými pohybmi. Nezabudni si zvýšene venovať jeho zadným zubom a ďasnám.." />
                    <BulletPoint text="Pochváľ svojho psíka a odmeň ho, keď sa správa dobre počas umývania zúbkov." />
                <Text style={styles.text}>Krok 6: Opakuj to každý deň</Text>
                    <BulletPoint text="Zahrň umývanie zúbkov do denného režimu vášho psíka. Opakuj túto rutinu každý deň alebo aspoň niekoľkokrát týždenne." />
                <Text style={styles.subtext}>Týmto jednoduchým spôsobom môžeš pomôcť udržiavať zdravé zuby a ďasná svojho psíka a zabrániť problémom s ústnou hygienou. Je to skvelý spôsob, ako mať šťastného a zdravého psíka!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

