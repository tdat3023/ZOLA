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
        TextInput,
        Dimensions, Platform, StatusBar} 
from 'react-native';


const WinWidth = Dimensions.get('window').width;
const WinHeight = Dimensions.get('window').height;
  

export default Login = function({navigation}){
  const [getPassWordVisible, setPassWordVisible] = useState(false);
    return (
        <ImageBackground source={require('../images/back.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.AndroidSafeArea}>
          
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

          {/* input login*/}
          <View style={{width: '100%', height: '25%', backgroundColor: 'green',flexDirection: 'column', alignItems: 'center'}}>
            {/* email */}
            <View style={{marginTop: 5, width: '95%', height: 40 }}> 
                
                <TextInput style={{ width: '100%', height: '100%', borderBottomColor: 'white',borderBottomWidth: 1,}}></TextInput>
            </View>


            {/* password */}
            <View style={{marginTop: 20, marginBottom:10, width: '95%', height: 40 , flexDirection: 'row'}}> 
                
                <TextInput style={{ width: '100%', height: '100%', borderBottomColor: 'white',borderBottomWidth: 1 }}
                secureTextEntry={getPassWordVisible? false : true} 
                ></TextInput>
                <TouchableOpacity 
                  onPress={()=>{
                    setPassWordVisible(!getPassWordVisible);
                  }}
                >
                  <Image source={require('../images/eye.png')} style={{height: '80%',width: 35, position: 'absolute', right: 0}}>
                  </Image> 
                </TouchableOpacity>
            </View>

            {/* recover password */}
            <View style={{marginTop: 20, marginBottom:10, width: '95%', height: 40, flexDirection: 'row'}}> 
                <TouchableOpacity>
                  <Text style={{ fontSize: 15, color: 'blue'}}>Lấy lại mật khẩu</Text>
                  </TouchableOpacity> 
              
           </View>
    
          </View>

          {/* As */}
          <View style={{marginTop: '100%', marginLeft:'5%', width: '95%', height: 40, flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}> 
                <TouchableOpacity
                 >
                  <Text style={{ fontSize: 15, color: 'gray'}}>Câu hỏi thường gặp ></Text>
                  </TouchableOpacity> 
                 
                  <TouchableOpacity 
                  style={{marginRight:'5%', width: 50, height:50, borderRadius: 100,  backgroundColor: 'blue' }}
                  onPress={() => { 
                    navigation.navigate('HomeTabs');}}>
                   
                  </TouchableOpacity>

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