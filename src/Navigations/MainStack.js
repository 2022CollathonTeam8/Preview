import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Login,
  Home,
  Signup,
  Main,
  ListScreen,
  UpLoadScreen,
  AboutItem,
  Main2,
  ChatRoom,
  Cache,
  Profile,
  Setting,
} from "../Screens";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="Cache" component={Cache} />
      <BottomTab.Screen name="ChatRoom" component={ChatRoom} />
      <BottomTab.Screen name="Main" component={MainStack} />

      <BottomTab.Screen name="Profile" component={Profile} />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Main2} />
      <Stack.Screen name="List" component={ListScreen} />
      {/* <Stack.Screen name="UpLoad" component={UpLoadScreen} /> */}
      <Stack.Screen name="AboutItem" component={AboutItem} />
    </Stack.Navigator>
  );
};

export default BottomTabNav;
