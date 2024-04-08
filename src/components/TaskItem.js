import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    marginHorizontal: 25,
    margin: 10,
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderColor: '#5A2828',
    borderWidth: 1.5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
  },
  content: {
    width: '85%',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Task;
