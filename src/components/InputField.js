import { Dimensions, TextInput, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const InputField = ({
  label,
  keyboardType = "default",
  multiline = false,
  largeInput = false,
  required = false,
  value,
  setValue,
}) => {
  return (
    <View>
      <View style={[styles.fieldContainer]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          placeholder={`Enter your ${label}`}
          onChangeText={(newValue) => setValue(newValue)}
          keyboardType={keyboardType}
          multiline={multiline}
          maxHeight={largeInput ? 200 : 50}
          style={styles.textInput}
        />
        {required ? (
          <Text
            style={{
              color: "red",
              marginLeft: 5,
              display: value == "" ? "flex" : "none",
            }}
          >
            *Required
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textInput: {
    borderColor: "gray",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 18,
    padding: 10,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
