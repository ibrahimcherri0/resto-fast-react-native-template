import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

interface Props {
  total: number;
  deliveryCharge: number;
  onPlaceOrder: () => void;
}

const CheckoutFooter: React.FC<Props> = ({
  total,
  deliveryCharge,
  onPlaceOrder,
}) => {
  const totalWithDelivery = total + deliveryCharge;

  return (
    <View style={styles.footer}>
      {/* Subtotal and delivery cost rows */}
      <View style={styles.footerRow}>
        <Text style={styles.footerLabel}>Sub Total</Text>
        <Text style={styles.footerValue}>{total.toFixed(2)} €</Text>
      </View>
      <View style={styles.footerRow}>
        <Text style={styles.footerLabel}>Delivery Charge</Text>
        <Text style={styles.footerValue}>{deliveryCharge.toFixed(2)} €</Text>
      </View>

      {/* Total cost row with bolder styles */}
      <View style={[styles.footerRow, { marginTop: 8 }]}>
        <Text style={[styles.footerLabel, styles.totalLabel]}>Total</Text>
        <Text style={[styles.footerValue, styles.totalValue]}>
          {totalWithDelivery.toFixed(2)} €
        </Text>
      </View>

      {/* Button to trigger order placement */}
      <TouchableOpacity
        testID="place-order-button"
        style={styles.checkoutButton}
        onPress={onPlaceOrder}
      >
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "static",
    bottom: 0,
    width: "90%",
    alignSelf: "center",
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    borderRadius: 20,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  footerLabel: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  footerValue: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 18,
  },
  totalValue: {
    fontWeight: "bold",
    fontSize: 18,
  },
  checkoutButton: {
    marginTop: 16,
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: "center",
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CheckoutFooter;
