import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import {
  Button,
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Profile = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <ScreenContainer
      style={styles.screenContainerJb}
      scrollable={true}
      hasSafeArea={false}
    >
      <ImageBackground
        style={styles.imageBackgroundNb}
        source={{uri:'https://img.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg?w=996&t=st=1665661938~exp=1665662538~hmac=cb58f71313de34607e5ccc39de6d766db79a87eab239cee8c7b7786f143f8719'}}
        resizeMode="cover"
      />
      <Container
        style={styles.containerEA}
        elevation={0}
        useThemeGutterPadding={true}
      >
        <Image
          style={StyleSheet.flatten([
            styles.imageA3
          ])}
          resizeMode="cover"
          source={{uri:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80'}}
        />
        <Text
          style={StyleSheet.flatten([
            styles.textPr
          ])}
        >
          Jessica Green
        </Text>
        <TouchableOpacity style={styles.buttonP2}>
          <Text style={{color:'#8438f9',fontWeight:'600'}}>Edit Profile</Text>
        </TouchableOpacity>
        {/* <Button style={styles.buttonP2} type="outline"></Button> */}
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOk
          ])}
        >
          <View style={styles.viewKs}>
            <Text style={{}}>Settings</Text>
            <Icon
              style={styles.iconFE}
              size={24}
              color={{}}
              name="MaterialIcons/account-circle"
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOm
          ])}
        >
          <View style={styles.viewYR}>
            <Text style={{}}>Notifications</Text>
            <Icon
              style={styles.iconCl}
              color={'black'}
              name="MaterialIcons/notifications"
              size={24}
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableBp
          ])}
        >
          <View style={styles.viewS1}>
            <Text style={{}}>Order History</Text>
            <Icon
              style={styles.iconZz}
              color={'black'}
              size={24}
              name="MaterialIcons/history"
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableJg
          ])}
        >
          <View style={styles.viewAl}>
            <Text style={{}}>Logout</Text>
            <Icon
              style={styles.iconZb}
              size={24}
              name="MaterialIcons/logout"
              color={'black'}
            />
          </View>
        </Touchable>
      </Container>
    </ScreenContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainerJb: {
    justifyContent: 'space-evenly',
  },
  viewKs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewYR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewS1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAl: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageBackgroundNb: {
    width: '100%',
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: 'center',
    marginTop: -65,
  },
  textPr: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
    fontSize:25,
    fontWeight:'bold',
    lineHeight:25,
    color:'black'
  },
  touchableOk: {
    borderTopWidth: 1,
    borderColor:'#c4c4ca',
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 24,
    height: 24,
  },
  iconZz: {
    width: 24,
    height: 24,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: 'center',
    width: 150,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#c4c4ca',
    backgroundColor:'white',
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  touchableOm: {
    borderColor:'#c4c4ca',
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    borderColor:'#c4c4ca',
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    borderColor:'#c4c4ca',
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
});
