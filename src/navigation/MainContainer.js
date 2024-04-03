import React from "react";
import { StartScreen, PickAnimalScreen, PetName, MainTabs } from "../config/import.Config"
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


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
