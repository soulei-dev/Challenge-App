import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Copyright from "../components/Copyright";
import useAxios from "../../hooks/useAxios";
import SearchInput from "../components/SearchInput";
import MealGrid from "../components/MealGrid";

const MealList = (props) => {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/search.php?f=a",
  });

  const renderGridItem = (itemData) => {
    return (
      <MealGrid
        title={itemData.item.strMeal}
        image={itemData.item.strMealThumb}
        area={itemData.item.strArea}
        tags={itemData.item.strTags}
        ingredients={itemData.item.strIngredient}
        onSelect={() =>
          navigation.navigate("MealDetail", {
            idMeal: itemData.item.idMeal,
            data: response,
          })
        }
      />
    );
  };
  return (
    <View style={styles.container}>
      <SearchInput placeholder="Search Meal" />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {error && error.message}
          {response && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyExtractor={(item, index) => item.idMeal}
              data={response.meals}
              renderItem={renderGridItem}
            />
          )}
        </View>
      )}
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
    alignItems: "center",
  },
});

export default MealList;
