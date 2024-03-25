import * as React from "react";
import 'react-native-gesture-handler';
import MainContainer from "./src/components/MainContainer";
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform, Keyboard } from 'react-native';
import Task from "./src/navigation/screens/TaskScreen";
import { useState } from 'react';

function App() {
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
  
  return <MainContainer />;

  <View style={styles.container}>
      <Navigation />
      {/* Today's tasks */}
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Dnešné Úlohy</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} tags={['random for ow']} />

                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={'Text 1, toto je nekonecny text ktory treba vyriesit, co sa stane ak je dostatocne dlhy?'} tags={['Tag1', 'Tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9',]} />
          <Task text={'Text 2'} tags={['tag1', 'tag2', 'tag3',]} />
          <Task text={'Text 3'} tags={['tag1', 'tag2']} /> */}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Sem napíš svoju úlohu'} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEAD1',

  },
  textWrapper: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 16,
  },
  items: {},

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
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
  addText: {

  },
});


export default App;
