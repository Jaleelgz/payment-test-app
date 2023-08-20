import * as SecureStore from "expo-secure-store";

export const AddCardsToStore = async (cards) => {
  await SecureStore.setItemAsync("cards", JSON.stringify(cards));
};

export const GetCardsFromStore = async () => {
  const cards = await SecureStore.getItemAsync("cards");

  if (cards) {
    return JSON.parse(cards);
  } else {
    return [];
  }
};
