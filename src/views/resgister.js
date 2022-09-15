import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef  } from "react";
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ImageBackground,
        SafeAreaView,
        Image,
        Dimensions} 
from 'react-native'
// import background from '../src/images/background.png';

const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;

export default Resgister = function(){
    return (
        // <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
              {/* Text Zalo */}
          <View style= {{width: '100%', height: '40%', backgroundColor: 'red', marginTop: '15%', alignItems: 'center'}}>  
            <Text style ={{fontSize:40, color: 'blue', alignItems: 'center'}}>Zalo</Text>
          </View>
    
          <View style= {{width: '100%', height: '30%', backgroundColor: 'green', marginTop: 20 ,marginBottom: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100, borderColor: 'white', borderWidth: 4, backgroundColor: 'blue', marginTop: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20, color: 'white'}}> ĐĂNG NHẬP</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={{width: '70%', height:'25%', borderRadius: 100, borderColor: 'white', borderWidth: 4, backgroundColor: 'gray', marginVertical: 0.05*WinHeight, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20}}> ĐĂNG KÝ</Text>
            </TouchableOpacity>
          </View>
          
          <View style= {{width: '100%', height: '10%', backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
          <TouchableOpacity><Text style={{fontSize: 15}}>Tiếng Việt</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{fontSize: 15}}>English</Text></TouchableOpacity>
          </View>
          
    
        
          
        </View>

        // </ImageBackground>
      );
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        width:'100%',
        height:'100%',
        
    }
});