import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";

import { TBUtton } from "../components";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={ST.container}>
      <View style={ST.logo}>
        <Text style={ST.tt}>로고위치</Text>
      </View>
      <View style={{ marginVertical: 10 }}></View>
      <TBUtton title="로그인" func={() => navigation.navigate("Login")} />
      <TBUtton title="회원가입" func={() => navigation.navigate("Signup")} />
    </SafeAreaView>
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
