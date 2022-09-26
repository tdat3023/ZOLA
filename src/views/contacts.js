import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
  const [Items, setItems] = useState([
    { key: 1, item: "Item1" },
    { key: 2, item: "Item2" },
    { key: 3, item: "Item3" },
    { key: 4, item: "Item4" },
    { key: 5, item: "Item5" },
    { key: 6, item: "Item6" },
    { key: 7, item: "Item7" },
    { key: 8, item: "Item8" },
    { key: 9, item: "Item9" },
    { key: 10, item: "Item10" },
    { key: 11, item: "Item11" },
    { key: 12, item: "Item12" },
    { key: 13, item: "Item13" },
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
              <Ionicons name="person-add" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* tagTop */}
        <View style={styles.topTagMenu}></View>

        {/* scrollview */}
        <ScrollView
          style={{ width: "100%" }}
          refreshControl={
            <RefreshControl>
              refreshing={Refreshing}
              onRefresh={onRefresh}
            </RefreshControl>
          }
        >
          {Items.map((item) => {
            return (
              <View style={styles.item} key={item.key}>
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
            );
          })}
        </ScrollView>
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
    width: "18%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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

  item: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    borderStyle: "solid",
  },

  chatBox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
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
    marginLeft: 10,
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
});
