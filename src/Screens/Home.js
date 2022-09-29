import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";

import { TBUtton } from "../../components";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={ST.container}>
      <View style={ST.logo}>
        <Text style={ST.tt}>로고위치</Text>
      </View>
      <View style={{ marginVertical: 10 }}></View>
      <TBUtton title="로그인" func={() => Alert.alert("로그인버튼")} />
      <TBUtton title="회원가입" func={() => Alert.alert("회원가입버튼")} />
    </SafeAreaView>
  );
};

const ST = StyleSheet.create({
  container: {
    // flex: 1,
  },
  logo: {
    backgroundColor: "blue",
    color: "white",
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  tt: {
    color: "white",
    fontSize: 16,
  },
});

export default Home;
