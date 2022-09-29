import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

// const Nav = () => {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// };
// export default Nav;

export function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
