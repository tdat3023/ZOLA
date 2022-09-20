import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect, useRef  } from "react";
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        SafeAreaView,
        Image,
        Dimensions, Platform, StatusBar} 
from 'react-native'


const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;

export default Home = ({navigation}) =>{
    return (
      
        <ImageBackground source={require('../images/back.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.AndroidSafeArea}>
              {/* Text Zalo */}
          <View style= {{width: '100%', height: '40%', backgroundColor: 'red', alignItems: 'center'}}>  
            <Text style ={{fontSize:40, color: 'blue', alignItems: 'center'}}>Zalo</Text>
          </View>
    
          <View style= {{width: '100%', height: '30%', marginTop: 20 ,marginBottom: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100,  backgroundColor: 'blue', marginTop: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => { 
                navigation.navigate('Login');
            }}>
                    <Text style={{fontSize: 20, color: 'white'}}> ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100,  backgroundColor: 'gray', marginVertical: 0.03*WinHeight, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20}}> ĐĂNG KÝ</Text>
            </TouchableOpacity>
          </View>
          
          <View style= {{marginTop: '20%',width: '100%', height: '10%', flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
          <TouchableOpacity><Text style={{fontSize: 15}}>Tiếng Việt</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{fontSize: 15}}>English</Text></TouchableOpacity>
          </View>
  
        </View>

       </ImageBackground>
    
      );
    }
    
const styles = StyleSheet.create({
   

    AndroidSafeArea: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});