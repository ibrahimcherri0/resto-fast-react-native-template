import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../types/product";

interface Props {
  item: Product;
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const CheckoutItem: React.FC<Props> = ({
  item,
  quantity,
  increment,
  decrement,
}) => (
  <View style={styles.itemContainer}>
    {/* Product image */}
    <Image source={item.image} style={styles.image} />

    {/* Product name and price */}
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price.toFixed(2)} €</Text>
    </View>

    {/* Quantity counter with decrement and increment buttons */}
    <View style={styles.counterContainer}>
      <TouchableOpacity
        testID="decrement-button"
        onPress={decrement}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text testID="quantity-text" style={styles.quantity}>
        {quantity}
      </Text>
      <TouchableOpacity
        testID="increment-button"
        onPress={increment}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 12,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    color: "#666",
    fontSize: 14,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#e0f9ff",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    width: 32,
    textAlign: "center",
    fontSize: 16,
  },
});
export default CheckoutItem;
