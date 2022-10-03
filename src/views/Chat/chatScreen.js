import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
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

export default ChatScreen = function (navigation) {
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
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>
          <View style={styles.nameFriend}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tên ở đây</Text>
            <Text>Thời gian truy cập</Text>
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
          <Text>chat</Text>
        </View>

        {/*Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.moreAction}>
            <Feather name="more-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.nameFriend}>
            <TextInput style={styles.textChat}></TextInput>
          </View>

          <View style={styles.moreTag}>
            <TouchableOpacity>
              <Ionicons name="videocam-outline" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="black" />
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
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  bodyContainer: {
    flex: 1,
  },

  footerContainer: {
    height: 60,

    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  nameFriend: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },

  moreTag: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  moreAction: {
    marginLeft: 10,
  },

  textChat: {
    flex: 1,
    backgroundColor: "gray",
  },
});
