import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, SafeAreaView, Text } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Home from "./Login/home";
import Login from "./Login/login";
// import Password from "./Login/PassWordRes";
import ChatApp from "./Chat/chatList";
import ProFile from "./profile";
import Contact from "./contacts";
import ChatScreen from "./Chat/chatScreen";
import Resgister from "./Login/resgister";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="Home" component={Home}/> */}
      <Tab.Screen
        name="Tin nhắn"
        component={ChatApp}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="message-text-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Danh bạ"
        component={Contact}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="contacts" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={ProFile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-circle-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="HomeTabs"
          component={MyTabs}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Resgister" component={Resgister} />

        {/* <Stack.Screen name="Password" component={PassWordRes} /> */}
        {/* <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProFile" component={ProFile} />
          <Stack.Screen name="Setting" component={Setting} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
