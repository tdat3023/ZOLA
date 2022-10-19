import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TextInput,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
// import background from '../src/images/background.png';

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Resgister = function ({ navigation }) {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: 5, marginRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>

          <Text style={styles.textTop}>Tạo tài khoản</Text>
        </View>

        {/* body */}
        <View style={styles.body}>
          <View style={styles.textName}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tên Zalo</Text>
          </View>

          {/* input login*/}

          <View style={styles.textInput}>
            <TextInput style={styles.input}></TextInput>
          </View>

          {/* recover password */}
          <View style={styles.textNote}>
            <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 5 }}>
              Lưu ý khi đặt tên:
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 10 }}>
              - Không vi phạm Quy định đặt tên trên Zalo
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 10 }}>
              - Nên sử dụng tên thật để giúp bạn bè dễ nhận ra bạn
            </Text>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={{ width: 200, fontSize: 15, color: "gray" }}>
              Tiếp tục nghĩa là bạn đồng ý với các điều khoản sử dụng Zalo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => {
              navigation.navigate("Password");
            }}
          >
            <AntDesign name="login" size={24} color="white" />
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
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: 60,
    backgroundColor: "blue",
    alignItems: "center",
    flexDirection: "row",
  },

  textTop: {
    fontSize: 20,
    color: "white",
  },

  body: {
    flex: 1,
    flexDirection: "column",
  },

  textName: {
    justifyContent: "center",
    padding: 10,
    height: 60,
    paddingLeft: 20,
  },

  textInput: {
    justifyContent: "center",
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },

  input: {
    width: 350,
    height: 50,
    borderBottomWidth: 4,
    borderColor: "blue",
  },

  footer: {
    height: 60,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  btnRegister: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    // marginBottom: 20,
  },
});
