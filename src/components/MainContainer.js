// MainContainer.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../navigation/screens/IntroScreen";
import PickAnimalScreen from "../navigation/screens/PickAnimalScreen";
import MainTabs from "../components/MainTabs";

const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="PickAnimal" component={PickAnimalScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
