import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from "react-native";

const MealGrid = ({ title, onSelect, image, area, tags, ingredients }) => {
  const { gridItem, imageContainer } = styles;
  return (
    <View style={gridItem}>
      <TouchableOpacity onSelect={onSelect}>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={imageContainer}
          source={{ uri: image }}
        >
          <Text style={{ color: "red" }}>{title}</Text>
          <Text style={{ color: "red" }}>{area}</Text>
          <Text style={{ color: "red" }}>{tags}</Text>
          <Text style={{ color: "red" }}>{ingredients}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 10,
    width: 350,
    height: 350,
  },
  gridItem: {
    flex: 1,
    margin: 22,
    height: 160,
  },
});

export default MealGrid;
