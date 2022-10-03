import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Text,
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

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Contact = function ({ navigation }) {
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
  ]);

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 100, item: "Item100" }]);

    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* button back */}
        <View style={styles.topTag}>
          <TouchableOpacity style={{ alignItems: "center", marginLeft: 10 }}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.sreach}>
            <TextInput style={styles.textTopTag}></TextInput>
          </View>

          <View style={styles.moreTag}>
            <TouchableOpacity>
              <Ionicons name="person-add" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* tagTop */}
        <View style={styles.topTagMenu}></View>

        {/* List chat */}
        <View style={styles.bodyListChat}>
          <FlatList
            style={styles.bodyList}
            data={users}
            renderItem={({ item }) => (
              <View style={styles.viewOne}>
                <TouchableOpacity>
                  <View style={styles.chatBox}>
                    {/* ảnh đại diện */}
                    <View style={styles.imaContainer}>
                      <Image
                        style={styles.imaAvatar}
                        source={{ uri: item.url }}
                      ></Image>
                    </View>

                    <View style={styles.bodyContainer}>
                      {/* tên */}
                      <Text style={styles.textName}>Ten o day</Text>
                    </View>

                    <View style={styles.notification}>
                      <Ionicons name="call-outline" size={24} color="black" />
                      <Ionicons
                        name="videocam-outline"
                        size={24}
                        color="black"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
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
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  notification: {
    width: "20%",
    paddingRight: 13,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 90,
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

  topTagMenu: {
    width: "100%",
    height: 50,
    backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  viewOne: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  chatBox: {
    width: "100%",
    height: 90,
    flexDirection: "row",
  },

  imaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  imaAvatar: {
    marginLeft: 10,
    height: 70,
    width: 70,
    borderRadius: 100,
  },

  bodyContainer: {
    marginLeft: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    height: 90,
    borderBottomWidth: 1,
    justifyContent: "center",
  },

  textName: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});
