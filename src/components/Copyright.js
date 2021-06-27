import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>© Souleimane Kouygou 2021</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 5,
    alignItems: "center",
  },
});

export default Copyright;
