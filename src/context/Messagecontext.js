import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const messageContext = createContext();

const Messagecontext = ({ children }) => {
  const [message, setMessage] = useState("");
  return (
    <messageContext.Provider value={{ message, setMessage }}>
      {children}
    </messageContext.Provider>
  );
};

export default Messagecontext;
