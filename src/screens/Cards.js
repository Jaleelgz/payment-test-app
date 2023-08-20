import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Cards = () => {
  const route = useRoute();
  const { amount } = route?.params;

  console.log("Amount :", amount);
  return (
    <View>
      <Text>Cards</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
