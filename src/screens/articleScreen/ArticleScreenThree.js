import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/PetArticleScreenStyles';

// Import images
import afraidCat from '../../../assets/afraidCat.png';

const BulletPoint = ({ text }) => {
    return (
        <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    );
};

export default function ArticleThree({ navigation }) {
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
                    <Text style={styles.header}>Mačka sa bojí hlasných zvukov – čo robiť?</Text>
                    <Text style={styles.subheader}>Ako navyknúť mačku na zvuky v byte.</Text>
                </View>

                {/* Long Article */}
                <View>
                    <Text style={styles.subtext}>
                    Príroda obdarila mačkovité šelmy veľmi jemným a ostrým sluchom. Mačka je nočný dravec (predátor) a ostrý sluch je jedným z hlavných nástrojov lovu. Dokonca aj slabé zvuky vnímajú mačky ostrejšie ako ľudia, nehovoriac o ostrých zvukoch domácich spotrebičov, zatvárajúcich sa dverí alebo hlasnej hudby.</Text>
                    {/* Long paragraph conditionally shown */}
                    {showMoreLongArticle ? (
                        <Text style={styles.subtext}>
                            Je ťažké ovplyvniť citlivosť mačky na zvuky, ale môže byť užitočné naučiť mačku reagovať na ne pokojnejšie. Väčšina spôsobov spočíva vo zvýšení dôvery k človeku a k prostrediu.
                            Mačka by mala mať v dome svoje vlastné útočisko, kde nebude za žiadnych okolností rušená. Najlepšie je, ak si mačka toto miesto vyberie sama. Keď si mačka nemôže vybrať vlastné miesto v dome, môžete jej ponúknuť špeciálny domček alebo veľkú kartónovú škatuľu s otvorom. Úkryt by mal byť na útulnom, tmavom mieste.
                            Na zvuky televízie, ľudskej reči, hluk vysávača je lepšie zvykať od detstva. Mačiatka, ktoré vyrastali v hlučnom byte, sú zvyčajne oveľa pokojnejšie na zvuky domácnosti, pretože si ich spájajú s rodným domom. Ak mačka vyrastala v chovateľskej stanici v izolovanej miestnosti alebo na ulici a do domu sa dostala až ako dospelá, je potrebné privyknúť ju na hluk postupne. V miestnosti môžete nechať zapnutý televízor a postupne každý deň zvuk zvyšovať. Alebo zapnite vysávač na nízky výkon a nechajte mačku, aby sa k nemu priblížila alebo ho očuchala. Je potrebné podporovať ukážky žiaduceho správania. V niektorých prípadoch môže mať vplyv prítomnosť inej mladej mačky v dome, ktorá sa nevyhýba hluku, pretože mačky majú tendenciu kopírovať správanie svojich príbuzných.
                            Ak všetky predchádzajúce metódy zlyhajú, možno použiť sedatíva – táto možnosť je však možná len po konzultácii s veterinárom.

                            {/* Button to toggle visibility of the long article */}
                            <TouchableOpacity onPress={toggleShowMoreLongArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
                                    Read Less
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    ) : (
                        <Text style={styles.subtext}>
                           Je ťažké ovplyvniť citlivosť mačky na zvuky, ale môže byť užitočné naučiť mačku reagovať na ne pokojnejšie. Väčšina spôsobov spočíva vo zvýšení dôvery k človeku a k prostrediu.
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
                            source={afraidCat}
                            style={styles.imageStyle}
                        /> 
                              
                {/* Short Article */}
                <View>
    <BulletPoint text="Vrastený pazúr u mačky" />

    {/* Short paragraph conditionally shown */}
    {showMoreShortArticle ? (
        <>
            <Text style={styles.subtext}>
                Ak sa mačke pravidelne nestrihajú pazúry, môžu zarásť a spôsobovať bolesť. Čo robiť, ak sa pazúrik vrastie?
                Ak má vaša mačka veľmi zaoblené alebo veľmi prerastené pazúry, môže to byť pre vášho domáceho miláčika veľmi nepríjemné.
            </Text>
            <Text style={styles.subheader}>Prečo má mačka vrastený pazúr?</Text>
            <BulletPoint text="Vaša mačka má mnoho rokov. Poruchy rastu pazúrikov sú častejšie u starších zvierat." />
            <BulletPoint text="Tvar pazúrika sa zmenil v dôsledku traumy." />
            <BulletPoint text="Vplyv majú genetické faktory: chyby v raste a tvare pazúrika." />
            <BulletPoint text="O pazúry sa dostatočne nestará." />
            <Text style={styles.subheader}>Čo robiť, ak má mačka vrastený pazúr?</Text>
            <Text style={styles.subtext}>
                Vždy sa každému chce pokúsiť pazúrik ohnúť a odstrániť ostrú hranu z kože. Toto by sa nikdy nemalo robiť! Jedine, ak je stupeň zarastania pazúrika nízky (nie viac ako 0,1 cm), je možné mačke pomôcť bez účasti veterinárneho lekára. Je potrebné zastrihnúť pazúrik, resp. jeho priehľadnú časť, bez toho, aby ste sa dotkli ružovej oblasti pazúrika. Na tento účel je najlepšie použiť špeciálne nožnice na pazúry. Ich tvar vylučuje možnosť poranenia okolitých tkanív. A potom vytiahnite vrastenú časť pazúrika pohybom proti smeru vrastania. Pazúrik sa spravidla ľahko vytiahne bez toho, aby došlo k traumatizácii okolitých tkanív. Ranu po odstránení pazúrika je potrebné ošetriť peroxidom vodíka. Uistite sa, že v rane nie je hnis a že rana príliš nekrváca.
                Ak pazúr vrastol pomerne hlboko, sú viditeľné príznaky hnisania alebo ak po odstránení pazúra usúdite, že rana nie je v poriadku, mali by ste kontaktovať svojho veterinára. Môže byť potrebný vážnejší chirurgický zákrok alebo antibiotická liečba.
                Majte na pamäti, že ak je pazúr vrastený, nejde o ojedinelý problém a tento stav sa bude opäť opakovať. Preto je potrebná veľmi starostlivá starostlivosť o mačku, pravidelné zastrihávanie pazúrikov a sledovanie stavu ostatných pazúrikov.
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
            Ak sa mačke pravidelne nestrihajú pazúry, môžu zarásť a spôsobovať bolesť. Čo robiť, ak sa pazúrik vrastie?
            Ak má vaša mačka veľmi zaoblené alebo veľmi prerastené pazúry, môže to byť pre vášho domáceho miláčika veľmi nepríjemné.
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
