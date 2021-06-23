import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import * as Screens from "../screens/index";
const { Screen, Navigator } = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const MealsNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator screenOptions={{ headerTransparent: true }}>
        <Screen name="Meal List" component={Screens.MealList} />
        <Screen name="Meal Detail" component={Screens.MealDetail} />
        <Screen name="Contact" component={Screens.Contact} />
      </Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
