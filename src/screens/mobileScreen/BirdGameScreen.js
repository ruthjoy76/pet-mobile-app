import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons} from '@expo/vector-icons';
import styles from '../styles/BirdGameScreenStyles';
import { useCallback, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './../../components/FlappyCat/screens/Home/Game/Start/Home';


export default function PetGameScreen({navigation}) {
    const SplashScreenHide = useCallback(async () => {
        await SplashScreen.hideAsync()
      }, [])
    
      useEffect(() => {
        setTimeout(() => {
          SplashScreenHide()
        }, 300)
      }, [])
    
      return (
        <>
        <View>
        <TouchableOpacity
      style={styles.circleButton}
      onPress={() => navigation.goBack("Game")}
    >
      <MaterialIcons name="keyboard-arrow-left" size={24} color="#5A2828" />
    </TouchableOpacity>
        </View>
          <StatusBar style="auto" />
          <Home />
        </>
      )
    }