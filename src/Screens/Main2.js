import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { Banner, TData } from "../components";
import { UserContext } from "../Contexts/User";

const Main2 = ({ navigation }) => {
  const [isRank, setIsRank] = useState(false);
  const { goMain } = useContext(UserContext);
  const { dispatch } = useContext(UserContext);

  const FtestLogin = () => {
    dispatch(true);
  };

  const FtestLogOut = () => {
    dispatch(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="게시판" onPress={() => setIsRank(false)} />
        <Button title="랭킹" onPress={() => setIsRank(true)} />
        <Button title="로그아웃 임시용" onPress={FtestLogOut} />
      </View>
      <View style={{ borderBottomColor: "grey", borderWidth: 2 }}></View>
      {!isRank ? (
        <ScrollView style={styles.container}>
          <Banner />
          <View style={{ marginBottom: 10 }}></View>
          {goMain ? (
            <TData onPress={() => navigation.navigate("AboutItem")} />
          ) : (
            <TData
              onPress={() => {
                Alert.alert("로그인하세요");
                setTimeout(() => {
                  navigation.navigate("Profile");
                }, 1000);
              }}
            />
          )}
        </ScrollView>
      ) : (
        <View>
          <Text>랭킹</Text>
          <Text>랭킹</Text>
          <Text>랭킹</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
});

export default Main2;
