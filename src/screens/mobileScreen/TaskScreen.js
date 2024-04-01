import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView } from 'react-native';
import "react-native-gesture-handler";
import Task from "../../components/TaskItem";

import dog from '../../../assets/dog.png';

export default function TaskScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
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
                <Task text={item} tags={['random for ow']} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        marginTop: 15,
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#FFEAD1',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 50,
    },
    scrollView: {
        flex: 1,
        marginTop: 10,
      },
    headerText: {
        fontSize: 28,
        fontWeight: '700',
        letterSpacing: 0.5,
        color: '#000000', 
        textAlign: 'center',  
        marginTop: 0,
    },
    subHeader: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#5A2828', 
        textAlign: 'left',  
        marginTop: 10,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
   
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 16,
    },
    items: {
        backgroundColor: '#FFEAD1',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 60,
        width: '70%',
        borderWidth: 1,
        borderColor: '#c0c0c0',
    },
    addWrapper: {
        height: 60,
        width: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addText: {}
});
