import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../components/styles/TaskItemStyle";

const Task = (props) => {
  const [isDone, setIsDone] = useState(false);

  const toggleIsDone = () => {
    setIsDone(!isDone);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={[styles.square, { backgroundColor: isDone ? '#5A2828' : 'transparent' }]}
        onPress={toggleIsDone}
      >
        {isDone && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={[styles.itemText, { textDecorationLine: isDone ? 'line-through' : 'none' }]}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};



export default Task;
