import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input } from "react-native-elements";
import { TButton } from "../components";
import { UserContext } from "../Contexts/User";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(UserContext);

  const FtestLogin = () => {
    dispatch(true);
  };

  return (
    <View style={S.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TButton
        title="로그인"
        func={() => {
          Alert.alert("로그인");
          FtestLogin();
        }}
      />
      <TButton title="회원가입" func={() => Alert.alert("회원가입")} />
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

export default Login;
