import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Screens from "../screens/index";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import CustomSidebarMenu from "../components/CustomSidebarMenu";

const Drawer = createDrawerNavigator();
const NavStack = createStackNavigator();
const ContactStack = createStackNavigator();

const NavStackScreen = ({ navigation }) => (
  <NavStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "transparent" } }}
  >
    <NavStack.Screen
      name="MealList"
      component={Screens.MealList}
      options={{
        title: "Smood Meal Explorer API",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginHorizontal: 10 }}
          >
            <FontAwesome5 name="hamburger" size={25} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/souleimane-kouygou-a923a0199/"
              )
            }
          >
            <AntDesign name="linkedin-square" size={25} color="#0c66c2" />
          </TouchableOpacity>
        ),
        headerTitleAlign: "left",
      }}
    />
    <NavStack.Screen
      name="MealDetail"
      component={Screens.MealDetail}
      options={{ title: "Meal Detail" }}
    />
  </NavStack.Navigator>
);

const ContactStackScreen = () => (
  <ContactStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: "transparent" } }}
  >
    <ContactStack.Screen name="Contact" component={Screens.Contact} />
  </ContactStack.Navigator>
);

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
      <Drawer.Navigator
        drawerType="back"
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        drawerStyle={{ width: 200 }}
        navigationOptions={{ header: null }}
        hideStatusBar={true}
      >
        <Drawer.Screen
          name="MealList"
          component={NavStackScreen}
          options={{ title: "Meal List", gestureEnabled: false }}
        />
        <Drawer.Screen name="Contact" component={ContactStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
