import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  RefreshControl,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function MessengerItem({ messend, props, route }) {
  // console.log(messend);
  return (
    <View style={styles.viewOne}>
      <TouchableOpacity>
        <View style={styles.chatBox}>
          <View style={styles.bodyContainer}>
            {messend.isSender ? (
              <View style={styles.yourMess}>
                <Image
                  style={styles.imaAvatar}
                  source={{ uri: messend.url }}
                ></Image>

                <Text
                  style={[
                    styles.textyourMes,
                    { width: messend.messengers.length > 20 ? "70%" : "auto" },
                  ]}
                >
                  {messend.messengers}
                </Text>
              </View>
            ) : (
              <View style={styles.myMess}>
                <Text style={styles.textmyMes}>{messend.messengers}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyListChat: {
    flex: 1,
    alignItems: "center",
  },

  viewOne: {
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  yourMess: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  imaAvatar: {
    height: 30,
    width: 30,
    borderRadius: 100,
    alignItems: "center",
    marginLeft: 10,
  },

  bodyContainer: {
    flex: 1,
    justifyContent: "center",
  },

  textyourMes: {
    padding: 10,
    marginLeft: 10,
    fontSize: 15,
    borderRadius: 10,
    width: "60%",
    borderWidth: 1,
    borderColor: "red",
  },

  myMess: {
    marginRight: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  textmyMes: {
    padding: 10,
    marginLeft: 10,
    fontSize: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
  },

  chatBox: {
    width: "100%",
    flexDirection: "row",
  },
});

export default MessengerItem;
