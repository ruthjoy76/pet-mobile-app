import React from "react";
import { Text, View } from "react-native";
import { CustomTabBarIcon, TaskScreen } from "../config/import.Config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, ArticleStackScreen, GameStackScreen } from "../navigation/StackScreen";

const Tab = createBottomTabNavigator();

function MainTabs() {
    
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
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconFocused={require("../../assets/homefocused.png")}
              iconUnfocused={require("../../assets/homeunfocused.png")}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Domov</Text>
          )
        }}
      />

<Tab.Screen
        name="Article"
        component={ArticleStackScreen} // Directly pass HomeScreen component
        options={{
          headerShown: false,
          tabBarIcon: ({ focused}) => (
            <View style={{}}>
              <CustomTabBarIcon
                focused={focused}
                iconFocused={require("../../assets/petfocused.png")}
                iconUnfocused={require("../../assets/petunfocused.png")}
                
              />
            </View>
          ),
          tabBarLabel: ({ focused}) => (
            <View style={{}}>
              <Text style={{ color: focused ? '#FFBA69' : '#5A2828' }}>Article</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="Hry"
        component={GameStackScreen}
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
