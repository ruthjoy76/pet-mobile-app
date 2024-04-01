import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Task = (props) => {
  const arrayOfTags = props.tags;

  const renderArray = (tagArray) => {
    return tagArray.map((obj, index) => {
      return <View style={styles.itemTagsText} key={index}><Text>{obj}</Text></View>
    })
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.itemText}>{props.text}</Text>
          <View style={styles.itemTags}>{renderArray(arrayOfTags)}</View>
        </View>
      </View>
    </View>
  )
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
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderColor: '#5A2828',
    borderWidth: 1.5,
    margin: 5,
  },
  content: {
    width: '92%',

  },
  itemText: {
    marginLeft: 8,
    fontSize: 16
  },
  itemTags: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    marginTop: 20,
    marginBottom: 0,
  },
  itemTagsText: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 18,
    backgroundColor: '#FFEAD1',
    shadowColor: '#000000',
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,

  }
});

export default Task;
