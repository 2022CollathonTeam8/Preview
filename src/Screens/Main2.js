import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { Banner, TData } from "../components";

const Main2 = ({ navigation }) => {
  const [isRank, setIsRank] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="게시판" onPress={() => setIsRank(false)} />
        <Button title="랭킹" onPress={() => setIsRank(true)} />
      </View>
      <View style={{ borderBottomColor: "grey", borderWidth: 2 }}></View>
      {!isRank ? (
        <ScrollView style={styles.container}>
          <Banner />
          <View style={{ marginBottom: 10 }}></View>
          <TData onPress={() => navigation.navigate("AboutItem")} />
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
