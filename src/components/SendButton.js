import React, { useContext } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { emailContext } from "../context/EmailContext";
import { messageContext } from "../context/Messagecontext";
import { mobileContext } from "../context/MobileContext";
import { nameContext } from "../context/NameContext";
import { SendMail } from "../utils/SendMail";

const SendButton = () => {
  const { name, setName } = useContext(nameContext);
  const { email, setEmail } = useContext(emailContext);
  const { message, setMessage } = useContext(messageContext);
  const { mobile, setMobile } = useContext(mobileContext);

  const showToast = () => {
    ToastAndroid.show("Mail sent succesfully!", ToastAndroid.SHORT);
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            name != "" && email != "" && message != ""
              ? SendMail(name, email, mobile, message)
              : Alert.alert("Required", "Please Fill all the required fields", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") },
                ]);
            setName("");
            setEmail("");
            setMessage("");
            setMobile("");
            showToast();
          }}
        >
          <Text style={styles.buttonText}>Send Mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  submit: {
    marginTop: 20,
    marginHorizontal: 20,
    alignSelf: "center",
    backgroundColor: "#2A84C2",
    padding: 15,
    borderRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
