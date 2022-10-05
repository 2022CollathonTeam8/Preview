import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { UserContext } from "../Contexts/User";

const Profile = () => {
  const { dispatch } = useContext(UserContext);
  const FtestLogOut = () => {
    dispatch(false);
  };
  return (
    <View>
      <Text>Profile screen</Text>
      <Text> Nick name is this</Text>
      <Button title="로그아웃" onPress={FtestLogOut} />
    </View>
  );
};

export default Profile;
