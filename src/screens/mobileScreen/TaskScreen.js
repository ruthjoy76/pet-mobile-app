import React, { useState } from 'react';
import "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, Alert } from "react-native";
import Task from '../../components/TaskItem';
import styles from '../styles/TaskScreenStyles';

import dog from '../../../assets/dog.png';

export default function TaskScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // Check if the task is empty
    if (!task || !task.trim()) {
      Alert.alert(
        "Empty Task",
        "Please enter a task.",
        [
          { text: "OK", style: "cancel" }
        ],
        { cancelable: true }
      );
      return; // If empty, return early without adding the task
    }
    
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  

  return (
    
    <View style={styles.container}>
      {/* Today's tasks */}
      
        <View style={styles.subContainer}>
       
          <View style={styles.header}>
            <Text style={styles.headerText}>Úlohy</Text>
          </View>
          <View style={styles.subHeader}>
            <Image
              source={dog}
              style={styles.imageStyle}
            />
            <Text style={styles.subHeaderText}>Psík zlatunký</Text>
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
        </View>
     

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Sem napíš svoju úlohu'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


    
