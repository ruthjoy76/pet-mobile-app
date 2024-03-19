// MainContainer.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ArticleScreen from './screens/ArticleScreen';

// Import images
import homeIconFocused from '../assets/homefocused.png';
import homeIconUnfocused from '../assets/homenotfocused.png';
import gameIconFocused from '../assets/gamefocused.png';
import gameIconUnfocused from '../assets/gamenotfocused.png';
import articleIconFocused from '../assets/articlefocused.png';
import articleIconUnfocused from '../assets/articlenotfocused.png';

// Screen names
const homeName = 'Domov';
const gameName = 'Hry';
const articleName = 'Úlohy';

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
     <NavigationContainer>
        <Tab.Navigator initialRouteName={homeName} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let routeName = route.name;

                if (routeName === homeName) {
                    iconName = focused ? homeIconFocused : homeIconUnfocused;
                } else if (routeName === gameName) {
                    iconName = focused ? gameIconFocused : gameIconUnfocused;
                } else if (routeName === articleName) {
                    iconName = focused ? articleIconFocused : articleIconUnfocused;
                }
                
                return <Image source={iconName} style={{ width: 20, height: 20 }} />;
            },
            tabBarLabel: ({ focused }) => {
                let labelStyle = focused ? styles.tabLabelFocused : styles.tabLabelUnfocused;
                let routeName = route.name;

                if (routeName === homeName) {
                    return <Text style={labelStyle}>{homeName}</Text>;
                } else if (routeName === gameName) {
                    return <Text style={labelStyle}>{gameName}</Text>;
                } else if (routeName === articleName) {
                    return <Text style={labelStyle}>{articleName}</Text>;
                }
            },
            tabBarLabelStyle: {
                color: 'blue', // Change the color of the font here
                fontSize: 12, // Change the font size here
            },
          })}>
          <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name={gameName} component={GameScreen} options={{ headerShown: false }} />
          <Tab.Screen name={articleName} component={ArticleScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
     </NavigationContainer>
    );
}

const styles = {
  tabLabelFocused: {
    color: '#FFBA69', // Example color for focused tab label
    fontWeight: 'bold', // Example font weight for focused tab label
  },
  tabLabelUnfocused: {
    color:'#5A2828', // Example color for unfocused tab label
    fontStyle: 'italic', // Example font style for unfocused tab label
  },
};

export default MainContainer;
