import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const mobileContext = createContext();

const MobileContext = ({ children }) => {
  const [mobile, setMobile] = useState("");
  return (
    <mobileContext.Provider value={{ mobile, setMobile }}>
      {children}
    </mobileContext.Provider>
  );
};

export default MobileContext;
