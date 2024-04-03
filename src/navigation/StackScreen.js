import { createStackNavigator, HomeScreen, PetArticleScreen, GameScreen, BirdGameScreen } from "../config/import.Config";

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
