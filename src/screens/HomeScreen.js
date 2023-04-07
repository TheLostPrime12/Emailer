import Lottie from "lottie-react-native";
import React, { createContext } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import InputContainer from "../components/InputContainer";
import SendButton from "../components/SendButton";

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      enabled
      keyboardVerticalOffset={300}
    >
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.lottie}>
          <Lottie
            source={require("../../assets/sent-email.json")}
            autoPlay
            loop
            height={200}
          />
        </View>
        <InputContainer />
        <SendButton />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  lottie: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height / 4,
    marginTop: 20,
  },
});
