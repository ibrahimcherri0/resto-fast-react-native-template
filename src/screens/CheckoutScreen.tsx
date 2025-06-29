import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../mockData/CheckoutProducts";
import HeaderTitle from "../components/HeaderTitle";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutFooter from "../components/CheckoutFooter";
import { COLORS } from "../constants/colors";

const CheckoutScreen: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(products.map((item) => [item.id, 1]))
  );

  // Increase quantity of a product by 1
  const increment = (id: string) =>
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));

  // Decrease quantity of a product by 1, but never below 1
  const decrement = (id: string) =>
    setQuantities((prev) => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));

  // Calculate the total price by summing (price * quantity) for all products
  const total = products.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header component with screen title */}
        <HeaderTitle title="Checkout" />

        {/* FlatList to render all products*/}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CheckoutItem
              item={item}
              quantity={quantities[item.id]} // Pass current quantity for this product
              increment={() => increment(item.id)} // Increment quantity callback
              decrement={() => decrement(item.id)} // Decrement quantity callback
            />
          )}
          contentContainerStyle={{ paddingVertical: 10 }}
        />

        {/* Footer component showing total price, delivery charge, and place order button */}
        <CheckoutFooter
          total={total}
          deliveryCharge={4.99} // Flat delivery charge
          onPlaceOrder={() => console.log("Send Order")} // Callback for order placement
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
  },
});

export default CheckoutScreen;
