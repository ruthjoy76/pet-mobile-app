import {
  ArticleScreen,
  HomeScreen,
  PetNameScreen,
  GameScreen,
  BirdGameScreen,
  ArticleOne,
  ArticleTwo,
  ArticleThree,
  ArticleFour
} from "../utils/import.Config";
import { createStackNavigator } from "@react-navigation/stack";

const ArticleStack = createStackNavigator(); // Create a stack navigator for HomeScreen and PetArticleScreen
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
        name="PetName"
        component={PetNameScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function ArticleStackScreen() {
  return (
    <ArticleStack.Navigator>
      <ArticleStack.Screen
        name="MainArticle"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
      <ArticleStack.Screen
        name="One"
        component={ArticleOne}
        options={{ headerShown: false }}
      />

      <ArticleStack.Screen
        name="Two"
        component={ArticleTwo}
        options={{ headerShown: false }}
      />

      <ArticleStack.Screen
        name="Three"
        component={ArticleThree}
        options={{ headerShown: false }}
      />

      <ArticleStack.Screen
        name="Four"
        component={ArticleFour}
        options={{ headerShown: false }}
      />
    </ArticleStack.Navigator>
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

export { HomeStackScreen, ArticleStackScreen, GameStackScreen };
