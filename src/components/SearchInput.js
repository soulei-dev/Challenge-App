import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = ({ placeholder, onChangeText, value }) => {
  const { input, searchSection, searchIcon } = styles;
  return (
    <View style={searchSection}>
      <AntDesign name="search1" size={20} color="#C7C7C7" style={searchIcon} />
      <TextInput
        round={true}
        placeholder={placeholder}
        style={input}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    width: "70%",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#C7C7C7",
    padding: 8,
    margin: 10,
  },
  searchIcon: {
    position: "absolute",
    bottom: 38,
    left: 350,
    zIndex: 15,
  },
});

export default SearchInput;
