import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, TextInput, Image,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [petNames, setPetNames] = useState({});

  // Load data from AsyncStorage when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  // Function to save data to AsyncStorage
  const saveData = async () => {
    try {
        await AsyncStorage.setItem('profileName', profileName);
        
        if (profilePicture) {
            await AsyncStorage.setItem('profilePicture', profilePicture);
        } else {
            await AsyncStorage.removeItem('profilePicture');
        }

        await AsyncStorage.setItem('selectedAnimals', JSON.stringify(selectedAnimals));
    } catch (error) {
        console.error('Failed to save data:', error);
    }
};


  // Function to load data from AsyncStorage
  const loadData = async () => {
    try {
      const savedProfileName = await AsyncStorage.getItem("profileName");
      const savedProfilePicture = await AsyncStorage.getItem("profilePicture");
      const savedSelectedAnimals = await AsyncStorage.getItem("selectedAnimals");

      if (savedProfileName) {
        setProfileName(savedProfileName);
      }

      if (savedProfilePicture) {
        setProfilePicture(savedProfilePicture);
      }

      if (savedSelectedAnimals) {
        setSelectedAnimals(JSON.parse(savedSelectedAnimals));
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

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
                // Save the new profile picture to AsyncStorage
                saveData();
            } else {
                // If no picture is selected, remove the profile picture from AsyncStorage
                setProfilePicture(null);
                saveData();
            }
        }
    );
};

  const handleProfileNameChange = (name) => {
    setProfileName(name);
    // Save the updated profile name to AsyncStorage
    saveData();
  };

  // Function to handle the reception of pet names from PetNameScreen
  const handlePetNamesUpdate = (newPetNames) => {
    setPetNames((prevPetNames) => ({
      ...prevPetNames,
      ...newPetNames,
    }));
  };

  // Save data when user navigates away from the screen
  useEffect(() => {
    return () => {
      saveData();
    };
  }, [profileName, profilePicture, selectedAnimals]);

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
              <FontAwesomeIcon icon={faUserPlus} size={20} color="#5A2828" />
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
            navigation.navigate("PetName", {
              selectedAnimals,
              profilePicture,
              petNames,
              handlePetNamesUpdate,
            });
          }}
        >
          <Text style={styles.enterButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
