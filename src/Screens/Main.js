import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { UserContext } from "../Contexts";
import { TButton } from "../components";

const Main = ({ navigation }) => {
  const { dispatch } = useContext(UserContext);
  const FtestLogin = () => {
    dispatch(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TButton title="습득자에요" func={() => Alert.alert("습득")} />
        <TButton
          title="분실자에요"
          func={() => {
            navigation.navigate("List");
          }}
        />
      </View>
      <Button
        title="Logout"
        onPress={() => {
          Alert.alert("로그아웃");
          FtestLogin();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
});

export default Main;
