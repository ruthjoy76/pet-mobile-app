// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import HomeScreen from "../navigation/screens/HomeScreen";
import GameScreen from "../navigation/screens/GameScreen";
import ArticleScreen from "../navigation/screens/ArticleScreen";
import CustomTabBarIcon from "../components/CustomTabBarIcon";
import PetArticleScreen from "../navigation/screens/PetArticleScreen"; // Import PetArticleScreen
import BirdGameScreen from "../navigation/screens/BirdGameScreen";

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

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          paddingTop: 5, // Add padding to the top of the tab bar
          paddingBottom: 5, // Add padding to the bottom of the tab bar
        }
      }}>
      <Tab.Screen
        name="Domov"
        component={HomeStackScreen} // Use the nested stack navigator
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/homefocused.png")}
                iconUnfocused={require("../../assets/homenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Domov</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Hry"
        component={GameStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/gamefocused.png")}
                iconUnfocused={require("../../assets/gamenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Hry</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Úlohy"
        component={ArticleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/articlefocused.png")}
                iconUnfocused={require("../../assets/articlenotfocused.png")}
              />
            </View>
          ),
          tabBarLabel: ({ focused, color, size }) => (
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
