import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import { TData } from "../components";

const ListScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
        <TData />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});

export default ListScreen;
