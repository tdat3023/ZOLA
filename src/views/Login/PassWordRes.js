import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect, useRef } from "react";
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

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Password = ({ navigation }) => {
  return (
    <View style={styles.AndroidSafeArea}>
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },

  topTag: {
    width: "100%",
    height: 45,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  textTopTag: {
    alignItems: "center",
    marginRight: "40%",
    fontSize: 15,
    color: "white",
  },

  textRemind: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  viewPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: "95%",
    height: 40,
    flexDirection: "row",
  },

  viewAcc: {
    marginTop: 5,
    width: "95%",
    height: 40,
  },

  inputPassword: {
    width: "100%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  inputAcc: {
    width: "100%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  imageEye: {
    padding: 5,
    height: "100%",
    width: 40,
    position: "absolute",
    right: 0,
  },

  recoverPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: "95%",
    height: 40,
    flexDirection: "row",
  },

  ask: {
    marginLeft: "5%",
    width: "95%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  login: {
    marginBottom: 20,
    marginRight: "5%",
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
