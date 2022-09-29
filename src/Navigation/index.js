import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* {user.loginstate ? <MainStack /> : <AuthStack />} */}
      <AuthStack />
    </NavigationContainer>
  );
};
export default Navigation;
