import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const Input = ({ onChangeText, value, placeholder, label, onBlur }) => {
  const { inputStyle, labelStyle } = styles;

  return (
    <View style={{ width: "70%" }}>
      <Text style={labelStyle}>{label}</Text>

      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: "600",
    color: "#F9A826",
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C7C7C7",
    padding: 8,
    margin: 10,
  },
});

export default Input;
