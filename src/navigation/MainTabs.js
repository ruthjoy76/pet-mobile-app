// MainTabs.js
import { React, createBottomTabNavigator, Text, View,  TaskScreen, CustomTabBarIcon } from "../config/import.Config"
import { HomeStackScreen, GameStackScreen } from "../navigation/StackScreen";

const Tab = createBottomTabNavigator();

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
