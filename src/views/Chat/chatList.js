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
import ChatScreen from "./chatScreen";

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default ChatApp = function ({ navigation }) {
  const [users, setUsers] = useState([
    {
      id: "1",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "Hello",
    },
    {
      id: "5",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "Goodbye",
    },
    {
      id: "3",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "He",
    },
    {
      id: "4",
      url: "https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg",
      name: "Tiến Đạt",
      lastMessage: "báo nhà",
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
            style={styles.bodyList}
            data={users}
            renderItem={({ item }) => <ChatItem item={item}></ChatItem>}
            keyExtractor={(item) => item.id}
          ></FlatList>
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

  sreach: {
    marginLeft: 10,
    backgroundColor: "white",
    width: "70%",
  },

  moreTag: {
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  notification: {
    paddingRight: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
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
    width: "100%",
    alignItems: "center",
  },

  viewOne: {
    width: "100%",
    height: 90,
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
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
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
    height: 90,
    flexDirection: "row",
  },

  textNoti: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    width: 25,
    borderRadius: 10,
  },

  bodyList: {
    width: "100%",
  },
});
