import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const nameContext = createContext();

const NameContext = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <nameContext.Provider value={{ name, setName }}>
      {children}
    </nameContext.Provider>
  );
};

export default NameContext;
