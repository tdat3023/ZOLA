import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,
        SafeAreaView,
        Text,
        } 
from 'react-native';
import Home from './home';
import Login from './login';
import ChatApp from './chatApp';
import ProFile from './profile';
import Setting from './setting';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="Home" component={Home}/> */}
      <Tab.Screen name="ChatApp" component={ChatApp} />
      <Tab.Screen name="Settings" component={Setting} />
      <Tab.Screen name="ProFile" component={ProFile} />
    </Tab.Navigator>
  );
}

export default RootComponent = function(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabs" component={MyTabs} screenOptions={{headerShown: false}} />
          {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProFile" component={ProFile} />
          <Stack.Screen name="Setting" component={Setting} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
}
