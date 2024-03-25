import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const Task = (props) => {

  const arrayOfTags = props.tags;

  const renderArray = (tagArray) => {
    return tagArray.map((obj, index) => {
      return <View style={styles.itemTagsText}><Text key={index}>{obj}</Text></View>
    })
  }


  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.itemText}>{props.text}</Text>
          <View style={styles.itemTags}>{renderArray(arrayOfTags)}
          </View>
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
    padding: 15,
    marginBottom: 16,

  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap ',
  },

  square: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderColor: '#5A2828',
    borderWidth: 1.5,
    marginRight: 8,
  },

  content: {
    width: '92%'
  },

  itemText: {
    marginLeft: 8,
    fontSize: 16
  },

  itemTags: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  itemTagsText: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 18,
    backgroundColor: '#FFEAD1',
    shadowColor: '#000000',
    elevation: 8,
    shadowOffset: {
      with: 1,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  }
})

export default Task;