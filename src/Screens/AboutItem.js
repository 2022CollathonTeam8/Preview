import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TButton } from "../components";
const AboutItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <View style={styles.imgBox}>
          <Text>물건사진</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textBox}>
          <Text style={styles.Btext}>00구 00동</Text>
          <Text style={styles.Btext}>20xx . xx .xx일</Text>
          <Text style={styles.Btext}>xx에서 주웠어요</Text>
        </View>
        <TButton title="확인하기" func={() => Alert.alert("확인")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  imgContainer: {
    flex: 2,
    alignItems: "center",
  },
  imgBox: {
    backgroundColor: "pink",
    height: "100%",
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 8,
  },
  textBox: {
    marginVertical: 20,
    alignItems: "center",
  },
  Btext: {
    fontSize: 30,
    paddingVertical: 10,
  },
});

export default AboutItem;
