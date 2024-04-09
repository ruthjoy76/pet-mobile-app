import React from 'react';
import { View, StyleSheet } from 'react-native';

const ImageContainer = ({ children }) => {
  return (
    <View style={[styles.container, children.length === 3 ? styles.containerSingleColumn : styles.containerTwoColumns]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  containerSingleColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerTwoColumns: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default ImageContainer;
