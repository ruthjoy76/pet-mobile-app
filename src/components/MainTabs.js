// MainTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import HomeScreen from "../navigation/screens/HomeScreen";
import GameScreen from "../navigation/screens/GameScreen";
import ArticleScreen from "../navigation/screens/ArticleScreen";
import CustomTabBarIcon from "../components/CustomTabBarIcon";

const Tab = createBottomTabNavigator();

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
        component={HomeScreen}
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
        component={GameScreen}
        options={{
          headerShown: false, // Hide the header for this screen
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
          headerShown: false, // Hide the header for this screen
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
