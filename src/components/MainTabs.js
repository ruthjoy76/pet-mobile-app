// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../navigation/screens/HomeScreen";
import GameScreen from "../navigation/screens/GameScreen";
import ArticleScreen from "../navigation/screens/ArticleScreen";
import CustomTabBarIcon from "../components/CustomTabBarIcon";

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFBA69', // Color for active tab screen name
        inactiveTintColor: '#5A2828', // Color for inactive tab screen name
      
      tabBarStyle: {
          backgroundColor: 'blue', // Change background color of the tab bar
          paddingBottom: 10, // Add padding to the bottom of the tab bar
        },
      }}>
      <Tab.Screen
        name="Domov"
        component={HomeScreen}
        options={{
          headerShown: false, // Hide the header for this screen
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon
              focused={focused}
              iconFocused={require("../../assets/homefocused.png")}
              iconUnfocused={require("../../assets/homenotfocused.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hry"
        component={GameScreen}
        options={{
          headerShown: false, // Hide the header for this screen
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon
              focused={focused}
              iconFocused={require("../../assets/gamefocused.png")}
              iconUnfocused={require("../../assets/gamenotfocused.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Úlohy"
        component={ArticleScreen}
        options={{
          headerShown: false, // Hide the header for this screen
          tabBarIcon: ({ focused, color, size }) => (
            <CustomTabBarIcon
              focused={focused}
              iconFocused={require("../../assets/articlefocused.png")}
              iconUnfocused={require("../../assets/articlenotfocused.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
