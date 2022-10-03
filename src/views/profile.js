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

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default ProFile = function ({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* button back */}
        <View style={styles.topTag}>
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.sreach}>
            <TextInput style={styles.textTopTag}></TextInput>
          </View>

          <View style={styles.moreTag}>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
        <View style={styles.center}>
          <TouchableOpacity>
            <View style={styles.chatBox}>
              {/* ảnh đại diện */}
              <View style={styles.imaContainer}>
                <Image
                  style={styles.imaAvatar}
                  source={require("../images/avatar.png")}
                ></Image>
              </View>

              <View style={styles.bodyContainer}>
                {/* tên */}
                <Text style={styles.textName}>Ten o day</Text>

                {/* tin nhắn cuối */}
                <Text style={styles.lastMess}>Last mess</Text>
              </View>

              <View style={styles.notification}></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    height: "100%",
    backgroundColor: "white",
  },

  sreach: {
    marginLeft: 10,
    backgroundColor: "white",
    width: 280,
  },

  topTag: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  moreTag: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  center: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    borderStyle: "solid",
  },
});
