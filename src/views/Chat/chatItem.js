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

function ChatItem(props) {
  let { avatar, name, lastMessage } = props.users;
  const { onPress } = props;
  debugger;

  return (
    <View style={styles.viewOne}>
      <TouchableOpacity>
        <View style={styles.chatBox}>
          {/* ảnh đại diện */}
          <View style={styles.imaContainer}>
            <Image
              style={styles.imaAvatar}
              source={{
                uri: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
              }}
            ></Image>
          </View>

          <View style={styles.bodyContainer}>
            {/* tên */}
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textLastMes}>{item.lastMessage}</Text>
          </View>

          <View style={styles.notification}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Ionicons name="videocam-outline" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    width: "100%",
    padding: 15,
    height: 70,
    flexDirection: "row",
  },

  imaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  notification: {
    width: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  topTag: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  bodyListChat: {
    flex: 1,
    alignItems: "center",
  },

  viewOne: {
    marginTop: 10,
    backgroundColor: "pink",
    width: 380,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  imaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imaAvatar: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  bodyContainer: {
    marginRight: 10,
    flex: 1,
    backgroundColor: "gray",
    borderwidth: 4,
    justifyContent: "center",
  },

  textName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  textLastMes: {
    marginLeft: 10,
    fontSize: 15,
  },

  chatBox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
  },
});

export default ChatItem;
