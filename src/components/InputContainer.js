import { View, Text } from "react-native";
import React, { useContext } from "react";
import InputField from "./InputField";
import { nameContext } from "../context/NameContext";
import { emailContext } from "../context/EmailContext";
import { messageContext } from "../context/Messagecontext";
import { mobileContext } from "../context/MobileContext";

const InputContainer = () => {
  const { name, setName } = useContext(nameContext);
  const { email, setEmail } = useContext(emailContext);
  const { message, setMessage } = useContext(messageContext);
  const { mobile, setMobile } = useContext(mobileContext);

  console.log(name);
  return (
    <View>
      <InputField
        label={"Name"}
        required={true}
        value={name}
        setValue={setName}
      />
      <InputField
        label={"Mobile Number"}
        keyboardType={"numeric"}
        value={mobile}
        setValue={setMobile}
      />
      <InputField
        label={"Email"}
        required={true}
        value={email}
        setValue={setEmail}
      />
      <InputField
        label={"Message"}
        multiline={true}
        largeInput={true}
        required={true}
        value={message}
        setValue={setMessage}
      />
    </View>
  );
};

export default InputContainer;
