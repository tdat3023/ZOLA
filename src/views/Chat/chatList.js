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
import ChatItem from "./chatItem";

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default ChatApp = function ({ navigation , props }) {
  const [users, setUsers] = useState([
    {
      key: "1",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "Hello",
    },
    {
      key: "5",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "Goodbye",
    },
    {
      key: "3",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "Hello",
    },
  ]);

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
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons
                style={{ marginLeft: 5, marginRight: 5 }}
                name="add-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* List chat */}
        <View style={styles.bodyListChat}>
          <FlatList
            data={users}
            renderItem={({ item }) => <ChatItem></ChatItem>}
            keyExtractor={(item) => item.id}
          ></FlatList>

          <Image></Image>
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

  moreTag: {
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
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
