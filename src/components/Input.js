import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Input = ({ onChangeText, value, placeholder, label, onBlur }) => {
  return (
    <View style={{ width: "70%" }}>
      <Label>{label}</Label>

      <InputStyle
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const Label = styled.Text`
  font-weight: 600;
  color: #f9a826;
`;

const InputStyle = styled.TextInput`
  border: 1px solid #c7c7c7;
  border-radius: 50px;
  padding: 8px;
  margin: 10px;
`;

export default Input;
