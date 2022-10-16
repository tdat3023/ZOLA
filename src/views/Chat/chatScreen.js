import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import MessengerItem from "./MessengerItem";

export default ChatScreen = ({ props, navigation, route }) => {
  const { item } = route.params;

  const [chatHistory, setChatHistory] = useState([
    {
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      isSender: true,
      timestamp: 1665542100,
      messengers: "hello world",
    },
    {
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      isSender: true,
      timestamp: 1665542119,
      messengers:
        "For stretch to have an effect, children must not have a fixed dimension along the secondary axis. In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.",
    },
    {
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      isSender: false,
      timestamp: 1665542125,
      messengers: "yes",
    },
    {
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      isSender: true,
      timestamp: 1665542300,
      messengers: "how about that?",
    },
  ]);
  // console.log(item);
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* Top tag */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <View style={styles.nameFriend}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
          </View>

          <View style={styles.moreTag}>
            <TouchableOpacity>
              <Ionicons name="call-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="videocam-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Body */}
        <View style={styles.bodyContainer}>
          <View style={styles.bodyListChat}>
            <FlatList
              style={styles.bodyList}
              data={chatHistory}
              renderItem={({ item }) => (
                <MessengerItem messend={item}></MessengerItem>
              )}
              key={"&{item.}timestamp"}
            ></FlatList>
          </View>
        </View>

        {/*Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.moreAction}>
            <MaterialCommunityIcons
              name="sticker-emoji"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <View style={styles.nameFriend}>
            <TextInput
              style={styles.textChat}
              placeholder="Tin nhắn"
            ></TextInput>
          </View>

          <View style={styles.moreTag}>
            <TouchableOpacity>
              <Feather name="more-horizontal" size={27} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="mic" size={27} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="image" size={27} color="black" />
            </TouchableOpacity>
          </View>
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
    flex: 1,
    backgroundColor: "white",
  },

  headerContainer: {
    height: 60,
    backgroundColor: "#66B2FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  bodyContainer: {
    flex: 1,
  },

  footerContainer: {
    height: 60,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
  },

  nameFriend: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },

  moreTag: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  moreAction: {
    marginLeft: 10,
  },

  textChat: {
    height: 50,
    width: "120%",
  },

  bodyListChat: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  bodyList: {
    width: "100%",
  },
});
