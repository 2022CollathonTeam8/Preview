import React, { useState, createContext } from "react";

const UserContext = createContext({
  goMain: false,
  dispatch: () => {},
});

const UserProvider = ({ children }) => {
  const [goMain, setGoMain] = useState();
  const dispatch = (props) => {
    setGoMain(props);
  };
  const value = { goMain, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
