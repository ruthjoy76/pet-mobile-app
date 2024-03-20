import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text } from 'react-native';

// Screens
import IntroScreen from './screens/IntroScreen'; // Import your IntroScreen component
import PickAnimalScreen from './screens/PickAnimalScreen';
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
const introName = 'Intro';
const pickAnimalName = 'Pick';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={introName} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={introName} component={IntroScreen} />
                <Stack.Screen name={pickAnimalName} component={PickAnimalScreen} />
                <Stack.Screen name="MainTabs" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function MainTabs() {
    return (
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

        })}>
            <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name={gameName} component={GameScreen} options={{ headerShown: false }} />
          <Tab.Screen name={articleName} component={ArticleScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

const styles = {
    tabLabelFocused: {
        color: '#FFBA69',
        fontWeight: 'bold',
    },
    tabLabelUnfocused: {
        color: '#5A2828',
    },
};

export default MainContainer;
