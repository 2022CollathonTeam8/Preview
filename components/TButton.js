import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const TButton = ({ title, func }) => {
  return (
    <TouchableOpacity onPress={func} style={styles.container}>
      <Text style={styles.t}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },

  t: {
    color: "white",
    fontSize: 16,
  },
});

export default TButton;
