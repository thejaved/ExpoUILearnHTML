import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import AppColors from "./config/AppColors";
import Home from "./Screens/Home/Home";
import Profile from "./Screens/Profile/Profile";

const Tab = createBottomTabNavigator();

function BTap() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "code" : "code";
          } else if (route.name === "About") {
            iconName = focused ? "user" : "user";
          }
          return (
            <Icon
              type="font-awesome"
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: AppColors.primary,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={Profile} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: "3%",
    left: "5%",
    right: "5%",
    height: 80,
    borderRadius: 20,
    elevation: 0,
  },
});
export default BTap;
