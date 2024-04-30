import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/PetArticleScreenStyles';

// Import images
import catArticle from '../../../assets/catArticle.png';

const BulletPoint = ({ text }) => {
    return (
        <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    );
};

export default function ArticleTwo({ navigation }) {
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
                    <Text style={styles.header}>Spoznajte svoju mačku lepšie</Text>
                    <Text style={styles.subheader}>
                        Čím viac sa o týchto úžasných zvieratách dozviete, tým lepšie pochopíte svoju mačku a tým šťastnejšie s ňou budete tráviť čas.
                    </Text>
                </View>

                {/* Long Article */}
                <View>
                    <BulletPoint text="Správny denný režim pre mačku" />
                    <Text style={styles.subtext}>
                        Mačky sú dravce (mäsožravce), teda tvory, ktoré musia byť pre úspešný lov stále v kondícii. A na to potrebujú dobrý spánok.
                    </Text>

                    {/* Long paragraph conditionally shown */}
                    {showMoreLongArticle ? (
                        <Text style={styles.subtext}>
                            Dospelá mačka spí 16 až 17 hodín denne. Majiteľ však často nevenuje pozornosť tomu, koľko jeho domáci miláčik skutočne spí. Ako to vlastne je? Ide o to, že mačka sa vyznačuje dlhými aj krátkymi obdobiami spánku, z ktorých niektoré si ľudia jednoducho nevšimnú.
                            Sme zvyknutí na dostatočne dlhé obdobia spánku a bdenia a tieto obdobia sú spojené s dennou dobou. U mačky sú tieto obdobia veľmi podmienené a súvisia s jej celkovým stavom, nasýtením a prostredím. Aby ste mohli s mačkou pohodlne žiť, musíte pochopiť základy jej správania a pokúsiť sa tieto poznatky využiť vo svoj prospech.
                            Nezabúdajme, že z historického hľadiska je mačka malý dravec. Jej predkovia dokázali uloviť veľkú korisť len zriedka. Mačka si nemôže dovoliť dlhý nepretržitý spánok – po strávení malej koristi sa musí bez ohľadu na dennú dobu opäť vydať za potravou. Preto mačka spí krátko.
                            Svoju úlohu zohráva aj malá veľkosť zvieraťa: aby v chladnom období nezmrzla, musí sa mačka buď veľa pohybovať, alebo si nájsť teplé miesto – to súvisí s túžbou vášho domáceho maznáčika nájsť si čo najútulnejšie a najteplejšie miesto v dome.
                            Malé zviera má v prírode veľa nepriateľov. Vzhľadom na to si mačka môže dovoliť pokojný spánok len vtedy, keď si je istá, že je v úplnom bezpečí. Ak je mačka nepokojná, nemá dostatok spánku, začne zreteľnejšie pociťovať úzkosť (nepokoj/obavy). Často je “zlé” správanie mačiek spôsobené práve nedostatkom spánku alebo plytkým, nepokojným spánkom.
                            Ak poznáte tieto charakteristiky, môžete upraviť “denný režim” vašej mačky tak, aby mala čas, ktorý potrebuje na kvalitný spánok, a aby sa tento spánok čo najviac zhodoval s vaším režimom. Ak teda chcete, aby vaša mačka v noci spala, večer sa s ňou aktívne hrajte, dajte jej možnosť uvoľniť energiu, ktorú nahromadila počas dňa, a potom ju dobre nakŕmte. Inými slovami, imitujte plnohodnotný lov s úspešným záverom. A pre dobrý spánok je ideálne, ak má mačka teplý dom alebo posteľ vedľa radiátora.
                            Ranné budenie mačiek je tiež úplne opodstatnené. Malé dravce (mäsožravce) majú oveľa rýchlejší metabolizmus ako človek a je len prirodzené, že mačka bude chcieť v tomto čase zjesť tuhú (poriadnu/bohatú) stravu. Problém tu môže vyriešiť automatické kŕmidlo s časovačom. Mačke poskytne nasýtenie a vám niekoľko hodín pokojného spánku.
                            Treba si uvedomiť, že mačka, ktorá sa cez deň dobre vyspala v tichu prázdneho bytu, vás v noci pravdepodobne nenechá spať. Preto je oveľa lepšie, ak mačka nežije sama, ale v spoločnosti iného domáceho zvieraťa. V prípade jeho neprítomnosti pomôžu hračky, ktoré malému dravcovi umožnia striedať toľko potrebné obdobia bdenia a spánku.
                            Bohužiaľ, mačka si sama nedokáže zorganizovať svoj denný režim. Rozumný a kompetentný majiteľ to však dokáže.
                            
                            {/* Button to toggle visibility of the long article */}
                            <TouchableOpacity onPress={toggleShowMoreLongArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
                                    Read Less
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    ) : (
                        <Text style={styles.subtext}>
                            Dospelá mačka spí 16 až 17 hodín denne. Majiteľ však často nevenuje pozornosť tomu, koľko jeho domáci miláčik skutočne spí. Ako to vlastne je? Ide o to, že mačka sa vyznačuje dlhými aj krátkymi obdobiami spánku, z ktorých niektoré si ľudia jednoducho nevšimnú.
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
                            source={catArticle}
                            style={styles.imageStyle}
                        /> 
                              
                {/* Short Article */}
                <View>
                    <Text style={styles.subheader}>
                        Ako zorganizovať deň vášho mačiatka, aby sa správne vyvíjalo a bolo aktívne.
                    </Text>
                    <BulletPoint text="Denný režim mačiatka" />

                    {/* Short paragraph conditionally shown */}
                    {showMoreShortArticle ? (
                        <Text style={styles.subtext}>
                            Mačiatko je veľmi aktívne a zvedavé. Môže sa hrať a zabudnúť ísť do záchoda.
                            Pozorný majiteľ však môže mačiatku pomôcť zorganizovať správny denný režim.
                            Treba pamätať na to, že mačiatko by sa malo kŕmiť v závislosti od jeho veku: najprv 5 až 6-krát denne a po dvoch mesiacoch 3 až 4-krát denne, po 6 mesiacoch 1 až 2-krát denne. Rozdeľte jedlá na celý deň v určitých hodinách, čím vytvoríte denný režim mačiatka. Pomôže mu to zvyknúť si na prísny čas kŕmenia a nebude žobrať o jedlo počas dňa. Ak pracujete, môže vám tento problém pomôcť vyriešiť automatické kŕmidlo s časovačom.
                            Čo teda mačiatka robia? Budia sa skoro, pretože pociťujú hlad, keďže majú rýchly metabolizmus. Ak nie ste pripravení vstávať skôr, opäť hľadajte pomoc v automatickom kŕmidle.
                            Po jedle by sa mačiatko malo hrať a behať. Nezabudnite, že hra je veľmi dôležitá pre správny vývoj. Ak ste zaneprázdnení alebo pracujete, môžete dať mačiatku príležitosť, aby samo sa zabavilo. Ponúknite mu rôzne hračky, loptičky, automatické hračky. Mačiatko by malo mať aj škrabadlo, aby neničilo nábytok a rohy domu.
                            Mačiatko, ktoré pobehovalo a hralo sa, potrebuje odpočinok. V takom prípade mu môžete ponúknuť domček, kde sa môže schovať a odpočívať, posteľ alebo dokonca celý komplex, ktorý zahŕňa ihrisko a domček. Počas spánku by mačiatko nemalo byť rušené.
                            Ak chcete, aby vás mačiatko v noci nerušilo, večer sa s ním aktívne hrajte. V takom prípade bude pobehovať a unaví sa, čo znamená, že jeho spánok bude dlhší a pevnejší. Ak si mačiatko zvykne na určitý režim života, bude sa tak správať aj vo vyššom veku, čo vám veľmi uľahčí starostlivosť o vášho domáceho miláčika.
                            či snívajú mačky?
                            {/* Button to toggle visibility of the short article */}
                            <TouchableOpacity onPress={toggleShowMoreShortArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
                                    Read Less
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    ) : (
                        <Text style={styles.subtext}>
                            Mačiatko je veľmi aktívne a zvedavé. Môže sa hrať a zabudnúť ísť do záchoda.
                            Pozorný majiteľ však môže mačiatku pomôcť zorganizovať správny denný režim.
                            {/* Button to toggle visibility of the short article */}
                            <TouchableOpacity onPress={toggleShowMoreShortArticle} style={styles.readMoreButton}>
                                <Text style={styles.readMoreText} textAlign="right">
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
