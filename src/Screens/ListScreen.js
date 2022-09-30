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
    <View>
      <ScrollView>
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
        <TData onPress={() => navigation.navigate("AboutItem")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});

export default ListScreen;
