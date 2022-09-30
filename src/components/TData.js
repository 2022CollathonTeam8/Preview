import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TData = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.img}></View>
      <View style={styles.content}>
        <Text> Bla Bla</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    // flex: 1,
    flexDirection: "row",
    marginBottom: 5,
  },
  img: {
    flex: 2,
    backgroundColor: "grey",
  },
  content: {
    flex: 8,
    justifyContent: "center",
    backgroundColor: "pink",
  },
});

export default TData;
