import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Order } from "../types/order";
import { COLORS } from "../constants/colors";
import { formatDateTime, getStatusStyle } from "../utils/formatOrderItem";

type OrderItemProps = {
  order: Order;
};

const OrderItem: React.FC<OrderItemProps> = ({ order }) => (
  <View testID="order-item" style={styles.card}>
    {/* Top row: Order ID on left, status on right with color based on status */}
    <View style={styles.row}>
      <Text style={styles.label}>Order ID: {order.id}</Text>
      <Text style={[styles.status, getStatusStyle(order.status)]}>
        {order.status}
      </Text>
    </View>

    {/* Date of the order formatted */}
    <Text style={styles.date}>{formatDateTime(order.date)}</Text>

    {/* Details button aligned to the right, currently logs the order ID */}
    <View style={styles.detailsRow}>
      <TouchableOpacity onPress={() => console.log(`Details of ${order.id}`)}>
        <Ionicons
          name="arrow-forward-outline"
          size={28}
          color={COLORS.primary}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  status: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  detailsRow: {
    marginTop: 10,
    alignItems: "flex-end",
  },
});

export default OrderItem;
