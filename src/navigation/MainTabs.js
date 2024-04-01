// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import HomeScreen from "../screens/mobileScreen/HomeScreen";
import GameScreen from "../screens/mobileScreen/GameScreen";
import TaskScreen from "../screens/mobileScreen/TaskScreen";
import CustomTabBarIcon from "../components/CustomTabBarIcon";
import PetArticleScreen from "../screens/mobileScreen/PetArticleScreen"; // Import PetArticleScreen
import BirdGameScreen from "../screens/mobileScreen/BirdGameScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator(); // Create a stack navigator for HomeScreen and PetArticleScreen
const GameStack = createStackNavigator(); // Create a stack navigator for GameScreen and PetGameScreen

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="PetArticle"
        component={PetArticleScreen}
        options={{ headerShown: false }}
      />
      
    </HomeStack.Navigator>
    
  );
}

function GameStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name="Game"
        component={GameScreen}
        options={{ headerShown: false }}
      />
      <GameStack.Screen
        name="BirdGame"
        component={BirdGameScreen}
        options={{ headerShown: false }}
      />
      
    </GameStack.Navigator>
    
  );
}

function MainTabs({route}) {
      const { petName } = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingTop: 10, // Add padding to the top of the tab bar
          paddingBottom: 15, // Add padding to the bottom of the tab bar
        }
      }}>
      <Tab.Screen
        name="Domov"
        component={HomeStackScreen} // Directly pass HomeScreen component
        initialParams={{ petName }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/homefocused.png")}
                iconUnfocused={require("../../assets/homenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused}) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Domov</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Hry"
        component={GameStackScreen}
        initialParams={{ petName }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/gamefocused.png")}
                iconUnfocused={require("../../assets/gamenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused}) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Hry</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Úlohy"
        component={TaskScreen}
        initialParams={{ petName }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/articlefocused.png")}
                iconUnfocused={require("../../assets/articlenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused}) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Úlohy</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
