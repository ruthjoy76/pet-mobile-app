// WelcomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const WelcomeScreen = () => {
    // State to store the user's profile information
    const [profile, setProfile] = useState({ name: '', profilePicture: '' });
    const [isProfileComplete, setIsProfileComplete] = useState(false);
    const navigation = useNavigation();

    // Handle form submission and profile creation
    const handleProfileCreation = () => {
        // Check if the name is provided
        if (profile.name.trim()) {
            // Set the profile as complete
            setIsProfileComplete(true);
        } else {
            // If the name is not provided, prompt the user
            alert("Please enter your name.");
        }
    };

    // Handle changes to the name input
    const handleNameChange = (name) => {
        setProfile({ ...profile, name });
    };

    // Function to navigate to main tabs
    const proceedToMainTabs = () => {
        navigation.navigate('MainTabs');
    };

    // Function to handle profile picture selection
    const handleProfilePictureSelection = async () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                const { uri } = response.assets[0];
                setProfile({ ...profile, profilePicture: uri });
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Introduction Container */}
            <View style={styles.introContainer}>
                <Text style={styles.heading}>Welcome to Pet Machine App!</Text>
                <Text style={styles.introText}>
                    Pet Machine App is your one-stop solution for all your pet's needs! Create profiles for your pets, track their feeding and nutrition, monitor their health and wellness, and connect with a community of pet lovers. Join us on this exciting journey of pet care!
                </Text>
            </View>

            {/* Profile Creation Container */}
            <View style={styles.profileContainer}>
                <Text style={styles.heading}>{isProfileComplete ? `Welcome, ${profile.name}!` : "Create Your Profile"}</Text>
                
                {isProfileComplete ? (
                    <Button title="Proceed to App" onPress={proceedToMainTabs} style={styles.button} />
                ) : (
                    <>
                        {/* Image Upload Section */}
                        <View style={styles.imageUploadContainer}>
                            <Text style={styles.uploadLabel}>Upload Profile Picture:</Text>
                            <TouchableOpacity onPress={handleProfilePictureSelection} style={styles.imageUploadButton}>
                                <Text style={styles.buttonText}>Select Image</Text>
                            </TouchableOpacity>
                            {/* Display the selected profile picture */}
                            {profile.profilePicture && (
                                <Image
                                    source={{ uri: profile.profilePicture }}
                                    style={styles.profileImage}
                                />
                            )}
                        </View>

                        {/* Name Input Section */}
                        <TextInput
                            placeholder="Enter your name"
                            value={profile.name}
                            onChangeText={handleNameChange}
                            style={styles.textInput}
                        />
                        <Button title="Create Profile & Continue" onPress={handleProfileCreation} style={styles.button} />
                    </>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#f5f5f5',
    },
    introContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    profileContainer: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    introText: {
        fontSize: 16,
        lineHeight: 22,
        color: '#555',
    },
    textInput: {
        marginBottom: 16,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
    },
    button: {
        marginVertical: 10,
    },
    imageUploadContainer: {
        marginBottom: 16,
        alignItems: 'center',
    },
    uploadLabel: {
        marginBottom: 8,
        fontSize: 16,
        color: '#333',
    },
    imageUploadButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
    },
});

export default WelcomeScreen;
