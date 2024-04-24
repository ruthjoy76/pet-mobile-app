import React, { useState, useEffect } from 'react';
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from '../../components/TaskItem';
import styles from '../styles/TaskScreenStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function TaskScreen() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [profileName, setProfileName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    // Function to load profile data from AsyncStorage
    const loadProfileData = async () => {
        try {
            const savedProfileName = await AsyncStorage.getItem('profileName');
            const savedProfilePicture = await AsyncStorage.getItem('profilePicture');

            if (savedProfileName) {
                setProfileName(savedProfileName);
            }

            if (savedProfilePicture) {
                setProfilePicture(savedProfilePicture);
            }
        } catch (error) {
            console.error('Failed to load profile data:', error);
        }
    };

    // Load profile data when the component mounts
    useEffect(() => {
        loadProfileData();
    }, []);

    const handleAddTask = () => {
        if (!task || !task.trim()) {
            Alert.alert(
                "Empty Task",
                "Please enter a task.",
                [{ text: "OK", style: "cancel" }],
                { cancelable: true }
            );
            return;
        }
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask("");
    };

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    };

    return (
        <View style={styles.container}>
            {/* Profile section: profile name and profile picture */}
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Úlohy</Text>
                </View>
                <View style={styles.profilePictureContainer}>
               
                <View style={styles.iconCircle}>
                {profilePicture ? (
                        <Image source={{ uri: profilePicture }} style={styles.imageStyle} />
                    ) : (
                     
                      <FontAwesomeIcon icon={faUserPlus} size={20} color="#5A2828" /> )}
                    </View>
                    <Text style={styles.subHeaderText}>{profileName}</Text>
                </View>
              
          <ScrollView style={styles.scrollView}>
                    <View style={styles.items}>
                        {/* This is where the tasks will go */}
                        {taskItems.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
         

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={'Sem napíš svoju úlohu'}
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        </View>
    );
}
