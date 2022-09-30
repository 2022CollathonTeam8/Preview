import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Input } from "react-native-elements";
import { TodoList, TodoInsert } from "../components";

const UpLoadScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.imagepickercontainer}>
          <TouchableOpacity
            style={styles.imagebox}
            onPress={() => Alert.alert("물건사진")}
          >
            <Text>물건사진</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.textinputcontainer}>
            <Input placeholder="xxxx" label="제품명" />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 10,
              }}
            >
              <Text>습득위치</Text>
              <TouchableOpacity
                style={styles.BTN}
                onPress={() => Alert.alert("카테고리")}
              >
                <Text>카테고리</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Text>물건분류</Text>
              <TouchableOpacity
                style={styles.BTN}
                onPress={() => Alert.alert("카테고리")}
              >
                <Text>카테고리</Text>
              </TouchableOpacity>
            </View>

            <Input placeholder="20xx.xx.xx" label="날짜" />

            <Input placeholder="00동 00" label="세부 장소" />

            <TodoInsert onAddTodo={addTodo} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          </View>

          <Button
            title="등록하기"
            onPress={() => {
              Alert.alert("등록");
              navigation.popToTop();
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagepickercontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textinputcontainer: {
    flex: 8,
  },

  imagebox: {
    width: "40%",
    height: "100%",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "grey",
  },

  BTN: {
    backgroundColor: "pink",
    padding: 10,
  },
});

export default UpLoadScreen;
