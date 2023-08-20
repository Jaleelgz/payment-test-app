import { StyleSheet, View } from "react-native";
import React from "react";
import MainNavigation from "./navigation/MainNavigation";

const Main = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
});
