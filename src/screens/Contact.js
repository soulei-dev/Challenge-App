import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Copyright from "../components/Copyright";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact Screen !</Text>
      <Copyright />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Contact;
