import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect, useRef  } from "react";
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        SafeAreaView,
        Image,
        TextInput,
        Dimensions, Platform, StatusBar} 
from 'react-native';


const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;
  



export default ChatApp = function({navigation}){
    return (
        <ImageBackground source={require('../images/back.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.AndroidSafeArea}>
          
    
        <Text>Trang chủ</Text>
          
                 
        </View>

        

        </ImageBackground>
      );
    }
    
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});