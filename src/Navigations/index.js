import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { UserContext } from "../Contexts/User";

export function Navigation() {
  const { goMain } = useContext(UserContext);
  return (
    <NavigationContainer>
      {goMain ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
