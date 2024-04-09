import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PickAnimalList from "../../components/PickAnimaList";
import styles from "../styles/PickAnimalScreenStyles";


// Import Images
import dog from "../../../assets/dog.png";
import cat from "../../../assets/cat.png";
import horse from "../../../assets/horse.png";
import bird from "../../../assets/bird.png";
import hamster from "../../../assets/hamster.png";
import rabbit from "../../../assets/rabbit.png";

const imageSources = [dog, cat, horse, bird, hamster, rabbit];

// Define animalsData directly in the component
const animalsData = [
  { name: "dog", image: dog },
  { name: "cat", image: cat },
  { name: "horse", image: horse },
  { name: "bird", image: bird },
  { name: "hamster", image: hamster },
  { name: "rabbit", image: rabbit}
];

const PickAnimalScreen = ({ navigation }) => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleAnimalSelection = (animal) => {
    const animalIndex = selectedAnimals.indexOf(animal);
    if (animalIndex === -1) {
      setSelectedAnimals([...selectedAnimals, animal]);
    } else {
      const updatedAnimals = [...selectedAnimals];
      updatedAnimals.splice(animalIndex, 1);
      setSelectedAnimals(updatedAnimals);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Pick your animal</Text>
        </View>
        <PickAnimalList
          animalsData={animalsData}
          imageSources={imageSources}
          selectedAnimals={selectedAnimals}
          handleAnimalSelection={handleAnimalSelection}
        />
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => {
            navigation.navigate("PetName", { selectedAnimals });
          }}
        >
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickAnimalScreen;
