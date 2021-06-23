import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Copyright = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>© Souleimane Kouygou 2021</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Copyright;
