import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const CustomSidebarMenu = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ marginVertical: 60 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "right",
            margin: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              props.navigation.dispatch(DrawerActions.closeDrawer())
            }
          >
            <EvilIcons name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}>
          Smood
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomSidebarMenu;
