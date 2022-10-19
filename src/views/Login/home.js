import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Home = ({ navigation }) => {
  return (
    <View style={styles.AndroidSafeArea}>
      {/* Text Zalo */}
      <View style={styles.container}>
        <View style={styles.viewZalo}>
          <Text
            style={{
              fontSize: 90,
              fontWeight: "500",
              color: "blue",
              alignItems: "center",
            }}
          >
            Zalo
          </Text>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}> ĐĂNG NHẬP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => {
              navigation.navigate("Resgister");
            }}
          >
            <Text style={{ fontSize: 20 }}> ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnTrans}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15 }}>Tiếng Việt</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 15 }}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "blue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },

  viewZalo: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    width: "100%",
    height: "30%",
    marginTop: 20,
    marginBottom: 0.05 * WinHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  btnLogin: {
    width: "70%",
    height: "25%",
    borderRadius: 100,
    backgroundColor: "blue",
    marginTop: 0.05 * WinHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  btnRegister: {
    width: "70%",
    height: "25%",
    borderRadius: 100,
    backgroundColor: "gray",
    marginVertical: 0.03 * WinHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  btnTrans: {
    marginTop: "20%",
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
