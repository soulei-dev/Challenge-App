import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Copyright from "../components/Copyright";

const MealDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen !</Text>
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

export default MealDetail;
