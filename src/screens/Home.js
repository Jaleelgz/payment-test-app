import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../utils/globalStyles";
import { IMAGES } from "../constants/images";
import { FONTS, FONT_SIZE } from "../constants/fonts";
import { COLORS } from "../constants/colors";
import { TextInput } from "react-native-paper";
import ParimaryButton from "../components/ParimaryButton";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ToastModes } from "../enum/ToastModes";

const Home = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");

  const numberRegex = /^[1-9]\d*(\.\d+)?$/;

  const navigatePage = () => {
    if (amount?.trim() === "" || !amount.match(numberRegex)) {
      Toast.show({
        type: ToastModes.warning,
        text1: "Please enter a valid amount!",
      });
      return;
    }

    navigation.navigate("Cards", { amount });
  };

  return (
    <View style={[GlobalStyles.screen, styles.container]}>
      <Image source={IMAGES.HOME_PAY} style={styles.homeImg} />
      <Text style={GlobalStyles.screenHeadTxt}>
        How much would you like to pay?
      </Text>
      <Text style={GlobalStyles.screenSubTxt}>
        Please enter amount in below column
      </Text>

      <TextInput
        mode="outlined"
        label="Amount"
        editable={true}
        outlineStyle={styles.textInputOutline}
        outlineColor={COLORS.TEXT_SECONDARY}
        value={amount}
        keyboardType="number-pad"
        onChangeText={setAmount}
        maxLength={7}
        style={[styles.textInputStyle]}
        selectionColor={COLORS.PRIMARY}
        focusable={true}
        left={
          <TextInput.Icon
            icon={() => (
              <MaterialCommunityIcons
                color={"#455154"}
                name="currency-usd"
                size={24}
              />
            )}
          />
        }
      />

      <ParimaryButton
        text={"Continue"}
        disabled={false}
        onPress={navigatePage}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: "100%",
    maxHeight: 300,
    resizeMode: "contain",
  },
  payHeadTxt: {
    fontFamily: FONTS.InterBold,
    fontSize: FONT_SIZE.BIG,
    textAlign: "center",
    color: COLORS.BLACK,
  },
  textInputStyle: {
    width: "100%",
    fontSize: FONT_SIZE.BIG,
    marginBottom: 15,
    marginTop: 20,
    backgroundColor: "#fff",
    borderColor: COLORS.TEXT_SECONDARY,
    fontFamily: FONTS.InterBold,
    fontWeight: "bold",
  },
  textInputOutline: {
    borderWidth: 2,
    borderRadius: 5,
  },
});
