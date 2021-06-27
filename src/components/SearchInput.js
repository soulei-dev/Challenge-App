import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";

const SearchInput = ({ placeholder, onChangeText, value }) => {
  const { searchIcon } = styles;
  return (
    <SearchSection>
      <AntDesign name="search1" size={20} color="#C7C7C7" style={searchIcon} />
      <Input
        round={true}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </SearchSection>
  );
};

const SearchSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  width: 70%;
  border: 1px solid #c7c7c7;
  padding: 8px;
  margin: 10px;
  border-radius: 50px;
`;

const styles = StyleSheet.create({
  searchIcon: {
    position: "absolute",
    bottom: 38,
    left: 350,
    zIndex: 15,
  },
});

export default SearchInput;
