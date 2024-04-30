import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/PetArticleScreenStyles';

// Import images
import whiskers from '../../../assets/whiskers.png';

const BulletPoint = ({ text }) => {
    return (
        <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    );
};

export default function ArticleFour({ navigation }) {
    // State variables for showing full articles
    const [showMoreLongArticle, setShowMoreLongArticle] = useState(false);
    const [showMoreShortArticle, setShowMoreShortArticle] = useState(false);

    // Toggling functions
    const toggleShowMoreLongArticle = () => setShowMoreLongArticle(!showMoreLongArticle);
    const toggleShowMoreShortArticle = () => setShowMoreShortArticle(!showMoreShortArticle);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.circleButton}
                        onPress={() => navigation.goBack("MainArticle")}
                    >
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="#5A2828" />
                    </TouchableOpacity>
                </View>
                
                {/* Header and subheader */}
                <View>
                    <Text style={styles.header}>Prečo mačky potrebujú fúzy?</Text>
                    <Text style={styles.subheader}>Niektorí majitelia mačiek môžu u svojich miláčikov zaznamenať nadmerné slinenie. Čo nám to môže povedať?</Text>
                </View>

                {/* Long Article */}
                <View>
                <BulletPoint text= "Definícia nadmerného slinenia u mačiek"/>
                    <Text style={styles.subtext}>
                    Na vylučovaní (tvorbe/produkcii) slín u zvieraťa nie je nič patologické. Táto tekutina plní množstvo funkcií, ktoré sú nevyhnutné pre normálnu podporu života zvieraťa. </Text>
                    {/* Long paragraph conditionally shown */}
                    {showMoreLongArticle ? (
                        <Text style={styles.subtext}>
                            Vrátane ochrannej – ochrana slizníc ústnej dutiny, ďasien, jazyka a zubov pred mechanickými účinkami rôzneho pôvodu, tráviacej – zásobovanie, zmäkčovanie a zabezpečenie ľahkého transportu (presunu) potravy do tráviaceho traktu. Vylučovanie slín u mačky je teda prirodzený proces a mnohí majitelia si ho ani nevšimnú. Čo však robiť, ak je slinenie také hojné (vydatne/intenzivne), že mu majiteľ domáceho zvieraťa začal venovať pozornosť?
                            {/* Button to toggle visibility of the long article */}
                            <TouchableOpacity onPress={toggleShowMoreLongArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
                                    Read Less
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    ) : (
                        <Text style={styles.subtext}>
                           Vrátane ochrannej – ochrana slizníc ústnej dutiny, ďasien, jazyka a zubov pred mechanickými účinkami rôzneho pôvodu, tráviacej – zásobovanie, zmäkčovanie a zabezpečenie ľahkého transportu (presunu) potravy do tráviaceho traktu. Vylučovanie slín u mačky je teda prirodzený proces a mnohí majitelia si ho ani nevšimnú.
                            {/* Button to toggle visibility of the long article */}
                            <TouchableOpacity onPress={toggleShowMoreLongArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
                                    Read More
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    )}
                </View>
                <Image
                            source={whiskers}
                            style={styles.imageStyle}
                        /> 
                <View>
                <BulletPoint text="Aké sú príznaky nadmerného slinenia?" />
                    <Text style={styles.subtext}>
                        Vždy sa každému chce pokúsiť pazúrik ohnúť a odstrániť ostrú hranu z kože. Toto by sa nikdy nemalo robiť! Jedine, ak je stupeň zarastania pazúrika nízky (nie viac ako 0,1 cm), je možné mačke pomôcť bez účasti veterinárneho lekára. Je potrebné zastrihnúť pazúrik, resp. jeho priehľadnú časť, bez toho, aby ste sa dotkli ružovej oblasti pazúrika. Na tento účel je najlepšie použiť špeciálne nožnice na pazúry. Ich tvar vylučuje možnosť poranenia okolitých tkanív. A potom vytiahnite vrastenú časť pazúrika pohybom proti smeru vrastania. Pazúrik sa spravidla ľahko vytiahne bez toho, aby došlo k traumatizácii okolitých tkanív. Ranu po odstránení pazúrika je potrebné ošetriť peroxidom vodíka. Uistite sa, že v rane nie je hnis a že rana príliš nekrváca.
                        Ak pazúr vrastol pomerne hlboko, sú viditeľné príznaky hnisania alebo ak po odstránení pazúra usúdite, že rana nie je v poriadku, mali by ste kontaktovať svojho veterinára. Môže byť potrebný vážnejší chirurgický zákrok alebo antibiotická liečba.
                        Majte na pamäti, že ak je pazúr vrastený, nejde o ojedinelý problém a tento stav sa bude opäť opakovať. Preto je potrebná veľmi starostlivá starostlivosť o mačku, pravidelné zastrihávanie pazúrikov a sledovanie stavu ostatných pazúrikov.
                    </Text>

                </View>
                              
                {/* Short Article */}
                <View>
                    <BulletPoint text="Prečo mačka často slintá?" />
            
                     {/* Short paragraph conditionally shown */}
                    {showMoreShortArticle ? (
                     <>
            <Text style={styles.subtext}>
            Mačka môže slintať z rôznych dôvodov, vrátane zjedenia horkých a kyslých potravín alebo liekov</Text>
           
            <BulletPoint text="Nevoľnosť (Nauzea), vrátane pri otrave;" />
            <BulletPoint text="Abnormality (patalogie/poruchy) slinných žliaz;" />
            <BulletPoint text="Vírusové ochorenia;" />
            <BulletPoint text="Vzteklina (besnota);" />
            <BulletPoint text="Novotvary (nadory) alebo cudzie predmety v ústach;" />
            <BulletPoint text="Primárne ochorenia ústnej dutiny (môžu zahŕňať zápal ďasien);" />
            <BulletPoint text="Sekundárne ochorenia ústnej dutiny (napríklad pri chronickom ochorení obličiek)." />
            <Text style={styles.subtext}>
            Ak je salivácia (slinenie) príliš hojné, môže to znamenať len zdravotný problém zvieraťa. Ak je slinenie alebo salivácia nadmerná, môže to znamenať len zdravotný problém domáceho zvieraťa. Príčinou tohto procesu môžu byť rôzne poruchy. Základom môže byť napríklad infekcia rôznymi vírusovými ochoreniami (napr. besnota), ktoré sú okrem iného sprevádzané zvýšenou telesnou teplotou a hojnou spotrebou vody zvieraťom, nevoľnosťou. Ďalšou príčinou môže byť otrava rôznej genézy, od potravy až po chemické látky. V tomto prípade je dôležité určiť, čo presne dostalo túto reakciu, sprevádzanú aj zvracaním, zmenami konzistencie stolice. Taktiež príčinou zvýšeného slinenia môžu byť aj ochorenia ústnej dutiny, zubov, ďasien. Tieto poruchy budú okrem iného sprevádzané zjavnou bolestivosťou pri jedle zvieraťa. Ku hojnému slineniu môže previesť aj prítomnosť cudzích predmetov v ústach, hrdle alebo pažeráku (zvyšky potravy, časti hračiek, chlpy). Chronické ochorenia, poruchy trávenia, rakovina a dokonca aj helminty môžu spôsobiť zvýšené slinenie.
            Nerobte unáhlené závery na vlastnú päsť. Samotné hojné slinenie nie je ochorenie, ale v kombinácii s inými príznakmi naznačuje prítomnosť určitého ochorenia, ktoré môže stanoviť len veterinárny lekár po vykonaní a rozlúštení špeciálnych analýz. Majiteľ by mal včas vyhľadať pomoc odborníka a s prihliadnutím na pokyny veterinárneho lekára začať s liečbou zvieraťa.
            </Text>
            
            {/* Button to toggle visibility of the short article */}
            <TouchableOpacity onPress={toggleShowMoreShortArticle} style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>
                    Read Less
                </Text>
            </TouchableOpacity>
        </>
    ) : (
        <Text style={styles.subtext}>
             Ak je salivácia (slinenie) príliš hojné, môže to znamenať len zdravotný problém zvieraťa.
            {/* Button to toggle visibility of the short article */}
            <TouchableOpacity onPress={toggleShowMoreShortArticle} style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>
                    Read More
                </Text>
            </TouchableOpacity>
        </Text>
    )}
</View>

            </View>
        </ScrollView>
    );
}
