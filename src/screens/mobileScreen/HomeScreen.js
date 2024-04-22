import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import PickAnimalList from "../../components/PickAnimaList";
import { launchImageLibrary } from 'react-native-image-picker';
import styles from "../styles/HomeScreenStyles";

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
  { name: "rabbit", image: rabbit },
];

const HomeScreen = ({ navigation }) => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileName, setProfileName] = useState('');
  const [petNames, setPetNames] = useState({}); // State to hold pet names

  // Handle animal selection
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

  // Handle profile picture upload
  const handleProfilePictureUpload = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        if (response.uri) {
          setProfilePicture(response.uri);
        }});
  };

  const handleProfileNameChange = (name) => {
    setProfileName(name);
  };

  // Function to handle the reception of pet names from PetNameScreen
  const handlePetNamesUpdate = (newPetNames) => {
    setPetNames((prevPetNames) => ({
      ...prevPetNames,
      ...newPetNames,
    }));
  };
  



  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Welcome to PetMachine</Text>
        </View>

        {/* Profile picture upload section */}
        <View style={styles.profilePictureContainer}>
          <TouchableOpacity onPress={handleProfilePictureUpload} style={styles.uploadButton}>
            <View style={styles.iconCircle}>
                <FontAwesomeIcon icon={faUserPlus} size={20} color="#ffffff" />
            </View>
          </TouchableOpacity>

          {profilePicture && (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          )}
          <TextInput
            style={styles.profileNameInput}
            placeholder="Enter profile name"
            value={profileName}
            onChangeText={handleProfileNameChange}
          />
        </View>

        {/* Animal selection section */}
        <View style={styles.pickAnimalContainer}>
          <Text style={styles.pickAnimalText}>Let's pick your Animal.</Text>
          <PickAnimalList
            animalsData={animalsData}
            imageSources={imageSources}
            selectedAnimals={selectedAnimals}
            handleAnimalSelection={handleAnimalSelection}
          />
        </View>

        {/* Navigation button */}
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => {
            navigation.navigate('PetName', { selectedAnimals, profilePicture, petNames, handlePetNamesUpdate });
          }}
        >
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>

       
      </View>
    </View>
  );
};

export default HomeScreen;
