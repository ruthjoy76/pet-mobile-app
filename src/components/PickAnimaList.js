import React from "react";
import { FlatList } from "react-native";
import CheckBoxItem from "./CheckBoxItem";

const PickAnimalList = ({
  animalsData,
  imageSources,
  selectedAnimals,
  handleAnimalSelection,
}) => {
  const renderItem = ({ item, index }) => (
    <CheckBoxItem
      item={item}
      imageSource={imageSources[index]}
      selectedAnimals={selectedAnimals}
      handleAnimalSelection={handleAnimalSelection}
    />
  );

  return (
    <FlatList
      data={animalsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      horizontal={true} // Set to true for horizontal scrolling
      showsHorizontalScrollIndicator={false} // Hide scroll indicator
    />
  );
};

export default PickAnimalList;
