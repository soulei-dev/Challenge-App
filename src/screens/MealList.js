import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Copyright from "../components/Copyright";

const MealList = (props) => {
  return (
    <View style={styles.container}>
      <Text>Meal List Screen !</Text>
      <Button
        title="Go to Meal Detail"
        onPress={() => props.navigation.navigate("MealDetail")}
      />
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

export default MealList;
