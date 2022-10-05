import React, { useContext } from "react";
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
import { UserContext } from "../Contexts/User";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="Cache" component={UpLoadScreen} />
      <BottomTab.Screen name="ChatRoom" component={ChatRoom} />
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Profile" component={LoginStack} />
      <BottomTab.Screen name="Setting" component={Setting} />
    </BottomTab.Navigator>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main2">
      <Stack.Screen name="Main2" component={Main2} />
      {/* 나중에 삭제할 스크린 */}
      <Stack.Screen name="List" component={ListScreen} />

      {/* <Stack.Screen name="UpLoad" component={UpLoadScreen} /> */}
      {/* <Stack.Screen name="Login" component={Login} /> */}
      {/* <Stack.Screen name="Signup" component={Signup} /> */}
      <Stack.Screen name="AboutItem" component={AboutItem} />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  const { goMain } = useContext(UserContext);
  return (
    <Stack.Navigator>
      {goMain ? (
        <Stack.Screen name="AfeterLogin" component={Profile} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default BottomTabNav;
