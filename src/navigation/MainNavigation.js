import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{ headerShown: true }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
