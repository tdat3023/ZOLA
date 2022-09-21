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

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default ChatApp = function ({ navigation }) {
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
      <View
        style={{
          backgroundColor: "blue",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* button back */}
        <View
          style={{
            width: "100%",
            height: "8%",
            backgroundColor: "yellow",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: "5%" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("../images/vector.png")}></Image>
          </TouchableOpacity>
          <Text
            style={{
              alignItems: "center",
              marginRight: "40%",
              fontSize: 15,
              color: "white",
            }}
          >
            Tìm kiếm
          </Text>
        </View>

        {/* scrollview */}
        <ScrollView
          style={{ width: "100%", backgroundColor: "white" }}
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
                <Text
                  style={{ fontSize: 15, textAlign: "center", width: "90%" }}
                >
                  {item.item}
                </Text>
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

  item: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 2,
  },
});
