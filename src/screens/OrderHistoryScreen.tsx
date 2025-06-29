import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import HeaderTitle from "../components/HeaderTitle";
import { orders } from "../mockData/orderList";
import OrderItem from "../components/OrderItem";

const OrderHistoryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title component displaying the screen header */}
      <HeaderTitle title="Order History" />

      {/* FlatList efficiently renders a scrollable list of orders */}
      <FlatList
        data={orders} // The array of order objects to render
        keyExtractor={(item) => item.id} // Unique key for each item based on order ID
        renderItem={({ item }) => <OrderItem order={item} />} // Render each order using OrderItem component
        contentContainerStyle={{ paddingBottom: 20 }} // Add padding to bottom for spacing
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
