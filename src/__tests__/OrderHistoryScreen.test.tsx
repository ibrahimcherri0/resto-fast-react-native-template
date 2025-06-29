import React from "react";
import { render } from "@testing-library/react-native";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import { orders } from "../mockData/orderList";

describe("OrderHistoryScreen", () => {
  test("renders the screen with header title", () => {
    const { getByText } = render(<OrderHistoryScreen />);

    // Ensure the title is displayed
    expect(getByText("Order History")).toBeTruthy();
  });

  test("renders all orders from the mock data", () => {
    const { getAllByTestId } = render(<OrderHistoryScreen />);

    // Make sure all orders are rendered via OrderItem with testID="order-item"
    const renderedItems = getAllByTestId("order-item");
    expect(renderedItems.length).toBe(orders.length);
  });

  test("displays specific order details", () => {
    const { getByText } = render(<OrderHistoryScreen />);

    // Check that a known field from the mock data is visible
    orders.forEach((order) => {
      expect(getByText("Order ID: " + order.id)).toBeTruthy();
    });
  });
});
