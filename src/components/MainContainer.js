import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../navigation/screens/IntroScreen";
import PickAnimalScreen from "../navigation/screens/PickAnimalScreen";
import PetName from "../navigation/screens/PetName";
import MainTabs from "../components/MainTabs";

const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }} // Hide the header for Start screen
        />
        <Stack.Screen
          name="PickAnimal"
          component={PickAnimalScreen}
          options={{ headerShown: false }} // Hide the header for PickAnimal screen
        />
        <Stack.Screen
          name="PetName"
          component={PetName}
          options={{ headerShown: false }} // Hide the header for PetName screen
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }} // Hide the header for MainTabs screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
