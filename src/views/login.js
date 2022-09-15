import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef  } from "react";
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        SafeAreaView,
        Image,
        TextInput,
        Dimensions} 
from 'react-native';


const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;

export default Login = function({navigation}){
    return (
        <ImageBackground source={require('../images/back.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          
          {/* button back */}
          <View style={{width: '100%', height: '8%', backgroundColor: 'blue', justifyContent: 'space-between',flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{ alignItems:'center', marginLeft: '5%'}}
             onPress={() => { 
              navigation.goBack()
            }}
              >
              
              <Image source={require('../images/vector.png')}>
              </Image> 
            </TouchableOpacity>
            <Text style={{ alignItems:'center', marginRight: '40%', fontSize: 15, color: 'white' }}>Đăng nhập</Text>
          </View>

          <View style={{width: '100%', height: '6%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 12}}>Vui lòng nhập số điện thoại và mật khẩu để đăng nhập</Text>
          </View>

          {/* email+ password */}
          <View style={{width: '100%', height: '20%', backgroundColor: 'green',flexDirection: 'column', alignItems: 'center'}}>
            {/* email */}
            <View style={{marginTop: 5, width: '95%', height: 40 }}> 
                
                <TextInput style={{ width: '100%', height: '100%', borderBottomColor: 'white',borderBottomWidth: 1,}}></TextInput>
            </View>


            {/* password */}
            <View style={{marginTop: 20, marginBottom:10, width: '95%', height: 40 , flexDirection: 'row'}}> 
                
                <TextInput style={{ width: '100%', height: '100%', borderBottomColor: 'white',borderBottomWidth: 1 }}
                secureTextEntry={true}
                ></TextInput>
                <TouchableOpacity >
                <Image source={require('../images/eye.png')} style={{height: '80%',width: 35, position: 'absolute', right: 0}}>
              </Image> 
                </TouchableOpacity>
            </View>
          </View>

        </View>
        </ImageBackground>
      );
    }
    
const styles = StyleSheet.create({
    container: {
        
       marginTop: '13%',
       backgroundColor:'white',
        width:'100%',
        height:'100%',
        
    }    
});