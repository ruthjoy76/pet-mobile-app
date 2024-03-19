import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ArticleScreen from './screens/ArticleScreen';

// Screen names
const homeName = 'Home';
const gameName = 'Game';
const articleName = 'Article';

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
     <NavigationContainer>
        <Tab.Navigator initialRouteName={homeName} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let routeName = route.name;

                if (routeName === homeName) {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (routeName === gameName) {
                    iconName = focused ? 'game-controller' : 'game-controller-outline';
                } else if (routeName === articleName) {
                    iconName = focused ? 'article' : 'article-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}>
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={gameName} component={GameScreen} />
          <Tab.Screen name={articleName} component={ArticleScreen} />
        </Tab.Navigator>
     </NavigationContainer>
    );
}

export default MainContainer;
