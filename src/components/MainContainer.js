import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow icon
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
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={styles.circle}>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  onPress={() => navigation.goBack()}
                  style={styles.arrow}
                />
              </View>
            ),
            title: "", // Remove the title
          })}
        />
        <Stack.Screen
          name="PetName"
          component={PetName}
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={styles.circle}>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  onPress={() => navigation.goBack()}
                  style={styles.arrow}
                />
              </View>
            ),
            title: "", // Remove the title
          })} />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={styles.circle}>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="white"
                  onPress={() => navigation.goBack()}
                  style={styles.arrow}
                />
              </View>
            ),
            title: "", // Remove the title
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFBA69",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  arrow: {
    marginLeft: 3,
    color: "#5A2828",
  },
});

export default MainContainer;
