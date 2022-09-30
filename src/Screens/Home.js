import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";

import { TButton } from "../components";

const Home = ({ navigation }) => {
  return (
    <View style={ST.container}>
      <View style={ST.logo}>
        <Text style={ST.tt}>로고위치</Text>
      </View>
      <View style={{ marginVertical: 10 }}></View>
      <TButton title="로그인" func={() => navigation.navigate("Login")} />
      <TButton title="회원가입" func={() => navigation.navigate("Signup")} />
    </View>
  );
};

const ST = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    backgroundColor: "blue",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  tt: {
    color: "white",
    fontSize: 16,
  },
});

export default Home;
