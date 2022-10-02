import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import BottomTabNav from "./MainStack";
import { UserContext } from "../Contexts/User";
import { SafeAreaView } from "react-native";
export function Navigation() {
  const { goMain } = useContext(UserContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {goMain ? <BottomTabNav /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
