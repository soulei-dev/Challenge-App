import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Copyright from "../components/Copyright";
import useAxios from "../../hooks/useAxios";

function ingredientsToListItems(recipe) {
  // default strIngredient 1 to 20
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingr = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (!ingr || !measure) {
      break;
    }

    ingredients.push(
      <View key={i} style={{ marginBottom: 10 }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >{`● ${ingr} - ${measure}`}</Text>
      </View>
    );
  }

  return ingredients;
}

const MealDetail = ({ route }) => {
  const { data, idMeal } = route.params;
  const selectedMeal = data.find((meal) => meal.idMeal === idMeal);
  const [recipe, setRecipe] = useState();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  });

  useEffect(() => {
    if (response !== null) {
      setRecipe(response.meals[0]);
    }
  }, [response]);

  if (!recipe) {
    return null;
  }

  const ingredients = ingredientsToListItems(recipe);

  const { strMeal, strMealThumb, strArea, strCategory, strInstructions } =
    selectedMeal;

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View
        style={{
          backgroundColor: "#fff2e3",
          height: 420,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <Image
          source={{ uri: strMealThumb }}
          style={{
            width: "100%",
            height: 350,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />
        <View style={{ margin: 10 }}>
          <Text style={styles.screenTitle}>{strMeal}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <View style={styles.areaStyle}>
              <Text style={styles.areaLabel}>{strArea}</Text>
            </View>
            <View style={styles.areaStyle}>
              <Text style={styles.categoryLabel}>{strCategory}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Content */}
      <ScrollView style={{ marginBottom: 5 }}>
        <View style={{ margin: 10 }}>
          {/* Ingredients */}
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.contentTitle}>Ingredients</Text>
          </View>
          {ingredients}
          {/* Instructions */}
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.contentTitle}>Instructions</Text>
          </View>
          <View>
            <Text>{strInstructions}</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Copyright />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    marginTop: 300,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  screenTitle: {
    fontWeight: "800",
    fontSize: 15,
  },
  areaStyle: {
    width: 80,
    height: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  areaLabel: {
    textAlign: "center",
    fontWeight: "600",
    color: "#ff8900",
  },
  categoryLabel: {
    textAlign: "center",
    fontWeight: "600",
    color: "#ff2e51",
  },
  contentTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
});

export default MealDetail;
