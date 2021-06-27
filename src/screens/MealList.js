import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import Copyright from "../components/Copyright";
import useAxios from "../../hooks/useAxios";
import SearchInput from "../components/SearchInput";
import MealGrid from "../components/MealGrid";

const MealList = (props) => {
  const [data, setData] = useState([]);

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/search.php?f=b",
  });

  useEffect(() => {
    if (response !== null) {
      setData(response.meals);
    }
  }, [response]);

  const renderGridItem = ({ item }) => {
    return (
      <MealGrid
        title={item.strMeal}
        image={item.strMealThumb}
        area={item.strArea}
        tags={item.strTags}
        ingredients={item.strIngredient1}
        onSelect={() =>
          props.navigation.navigate("MealDetail", {
            idMeal: item.idMeal,
            data: data,
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
        <View style={{ flex: 1, marginTop: 50 }}>
          {error && error.message}
          {data && (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyExtractor={(item, index) => item.idMeal}
              data={data}
              renderItem={renderGridItem}
            />
          )}
          <Copyright />
        </View>
      )}
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
