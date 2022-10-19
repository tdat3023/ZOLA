import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
  Dimensions,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const WinWidth = Dimensions.get("window").width;
const WinHeight = Dimensions.get("window").height;

export default Login = function ({ navigation }) {
  const [getPassWordVisible, setPassWordVisible] = useState(false);

  //states for validating
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  //states to store email/password
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const isValidationOK = () =>
  //   email.length > 0 &&
  //   password.length > 0 &&
  //   isValidEmail(email) == true &&
  //   isValidPassword(password) == true;

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* button back */}

        <View style={styles.topTag}>
          <TouchableOpacity
            style={{ alignItems: "center", marginLeft: 5 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>
          <Text style={styles.textTopTag}>Đăng nhập</Text>
        </View>

        <View style={styles.textRemind}>
          <Text style={{ fontSize: 12 }}>
            Vui lòng nhập email và mật khẩu để đăng nhập
          </Text>
        </View>

        {/* input login*/}
        <View style={styles.input}>
          {/* email */}
          <View style={styles.viewAcc}>
            <TextInput
              style={styles.inputAcc}
              keyboardType="email"
              placeholder="example@gmail.com"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            ></TextInput>
          </View>

          {/* password */}
          <View style={styles.viewPassword}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={getPassWordVisible ? false : true}
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {
                setPassWordVisible(!getPassWordVisible);
              }}
            >
              {getPassWordVisible ? (
                <Ionicons
                  style={styles.imageEye}
                  name="eye-off-outline"
                  size={24}
                  color="black"
                />
              ) : (
                <Ionicons
                  style={styles.imageEye}
                  name="eye"
                  size={24}
                  color="black"
                />
              )}
            </TouchableOpacity>
          </View>

          {/* recover password */}
          <View style={styles.recoverPassword}>
            <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("Password");
            // }}
            >
              <Text style={{ fontSize: 15, color: "blue" }}>
                Lấy lại mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ask */}
        <View style={styles.ask}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, color: "gray" }}>
              Câu hỏi thường gặp >
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.login}
            onPress={() => {
              navigation.navigate("HomeTabs");
            }}
          >
            <AntDesign name="login" size={24} color="black" />
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

  topTag: {
    width: "100%",
    height: 45,
    backgroundColor: "#66B2FF",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  textTopTag: {
    alignItems: "center",
    marginRight: "40%",
    fontSize: 15,
    color: "white",
  },

  textRemind: {
    width: "100%",
    height: 50,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  viewPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: "95%",
    height: 40,
    flexDirection: "row",
  },

  viewAcc: {
    marginTop: 5,
    width: "95%",
    height: 40,
  },

  inputPassword: {
    width: "100%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  inputAcc: {
    width: "100%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },

  imageEye: {
    padding: 5,
    height: "100%",
    width: 40,
    position: "absolute",
    right: 0,
  },

  recoverPassword: {
    marginTop: 20,
    marginBottom: 10,
    width: "95%",
    height: 40,
    flexDirection: "row",
  },

  ask: {
    marginLeft: "5%",
    width: "95%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  login: {
    marginBottom: 20,
    marginRight: "5%",
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
