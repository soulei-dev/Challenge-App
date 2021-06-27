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
      <TouchableOpacity onPress={onSelect}>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={imageContainer}
          source={{ uri: image }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#ededed",
              borderRadius: 10,
              padding: 10,
              width: 230,
              height: 180,
              top: 140,
              shadowColor: "black",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 5,
            }}
          >
            <View
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
                marginBottom: 5,
              }}
            >
              <Text style={{ fontWeight: "800" }}>{title}</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                width: 100,
                height: 20,
                backgroundColor: "#ffda9c",
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "600",
                  color: "#ffa44a",
                  textAlign: "center",
                }}
              >
                {area}
              </Text>
            </View>
            <View style={{ flex: 1, marginBottom: 20 }}>
              <Text>Ingredient: {ingredients}</Text>
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {tags ? (
                <View style={{}}>
                  <Text
                    style={{
                      fontWeight: "600",
                      color: "#e69000",
                    }}
                  >
                    {tags}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    top: 15,
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Text>No Tag</Text>
                </View>
              )}
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 250,
    height: 350,
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 160,
  },
});

export default MealGrid;
