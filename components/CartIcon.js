import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import cartStore from "../stores/cartStore";
import { useNavigation } from "@react-navigation/native";
export function CartIcon() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <View style={styles.container}>
        <Text style={styles.text}>Cart ({cartStore.getTotalPrice()})</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 80,
    marginHorizontal: 8,
   fontWeight: "xl",
    height: 40,
    padding: 10,
    borderRadius: 32 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
