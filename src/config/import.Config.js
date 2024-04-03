// importConfig.js
import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, Platform, ScrollView, KeyboardAvoidingView, StyleSheet, Keyboard } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons} from '@expo/vector-icons';

import StartScreen from "../screens/mobileScreen/IntroScreen";
import HomeScreen from "../screens/mobileScreen/HomeScreen";
import GameScreen from "../screens/mobileScreen/GameScreen";
import TaskScreen from "../screens/mobileScreen/TaskScreen";
import PetArticleScreen from "../screens/mobileScreen/PetArticleScreen";
import BirdGameScreen from "../screens/mobileScreen/BirdGameScreen";
import Task from "../components/TaskItem";
import PickAnimalScreen from "../screens/mobileScreen/PickAnimalScreen";
import PetName from "../screens/mobileScreen/PetNameScreen";
import MainTabs from "../navigation/MainTabs";

import CustomTabBarIcon from "../components/CustomTabBarIcon";

import ArticleOne from "../screens/articleScreen/ArticleScreenOne";
import ArticleTwo from "../screens/articleScreen/ArticleScreenTwo";
import ArticleThree from "../screens/articleScreen/ArticleScreenThree";

export { 
    React, 
    Text, 
    View,
    TextInput, 
    TouchableOpacity, 
    Image, 
    SafeAreaView, 
    Platform,
    ScrollView, 
    KeyboardAvoidingView,
    StyleSheet,
    Keyboard, 
    MaterialIcons,
    createBottomTabNavigator, 
    createStackNavigator ,
    StartScreen, 
    HomeScreen, 
    GameScreen, 
    TaskScreen,
    Task, 
    PetArticleScreen, 
    BirdGameScreen,
    PickAnimalScreen,
    PetName,
    MainTabs, 
    CustomTabBarIcon, 
    ArticleOne, 
    ArticleTwo, 
    ArticleThree, 
};
