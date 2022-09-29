import React, { useState, useContext } from "react";
import { View, Text, Button, Alert } from "react-native";
import { UserContext } from "../Contexts";

const Main = () => {
  const { dispatch } = useContext(UserContext);
  const FtestLogin = () => {
    dispatch(false);
  };

  return (
    <View>
      <Text>Hello Main page</Text>

      <Button
        title="Logout"
        onPress={() => {
          Alert.alert("로그아웃");
          FtestLogin();
        }}
      />
    </View>
  );
};

export default Main;
