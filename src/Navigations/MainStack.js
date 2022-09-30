import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main, ListScreen, UpLoadScreen, AboutItem } from "../Screens";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="UpLoad" component={UpLoadScreen} />
      <Stack.Screen name="AboutItem" component={AboutItem} />
    </Stack.Navigator>
  );
};

export default MainStack;
