import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import Copyright from "../components/Copyright";
import useAxios from "../../hooks/useAxios";
import styled from "styled-components";

// Function to list ingredients items
const ingredientsToListItems = (recipe) => {
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
        >{`• ${ingr} - ${measure}`}</Text>
      </View>
    );
  }

  return ingredients;
};

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

  //   list of ingredients
  const ingredients = ingredientsToListItems(recipe);

  const { strMeal, strMealThumb, strArea, strCategory, strInstructions } =
    selectedMeal;

  return (
    <Screen>
      {/* Header */}
      <Header>
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
          <Title>{strMeal}</Title>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Area>
              <AreaLabel>{strArea}</AreaLabel>
            </Area>
            <Area>
              <CategoryLabel>{strCategory}</CategoryLabel>
            </Area>
          </View>
        </View>
      </Header>
      {/* Content */}
      <ScrollView
        style={{ marginBottom: 5 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ margin: 10 }}>
          {/* Ingredients */}
          <View style={{ marginBottom: 10 }}>
            <ContentTitle>Ingredients</ContentTitle>
          </View>
          {ingredients}
          {/* Instructions */}
          <View style={{ marginBottom: 10 }}>
            <ContentTitle>Instructions</ContentTitle>
          </View>
          <View>
            <Text>{strInstructions}</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          {/* Footer */}
          <Copyright />
        </View>
      </ScrollView>
    </Screen>
  );
};

const Header = styled.View`
  background-color: #fff2e3;
  height: 420px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Title = styled.Text`
  font-weight: 800;
  font-size: 15px;
`;

const Area = styled.View`
  width: 80px;
  height: 20px;
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const AreaLabel = styled.Text`
  text-align: center;
  font-weight: 600;
  color: #ff8900;
`;

const CategoryLabel = styled.Text`
  text-align: center;
  font-weight: 600;
  color: #ff2e51;
`;

const ContentTitle = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

const Screen = styled.View`
  flex: 1;
`;

export default MealDetail;
