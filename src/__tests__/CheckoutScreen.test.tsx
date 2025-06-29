import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CheckoutScreen from "../screens/CheckoutScreen";
import { products } from "../mockData/CheckoutProducts";

describe("CheckoutScreen", () => {
  test("renders correctly with all products", () => {
    const { getByText } = render(<CheckoutScreen />);

    // Check that header title is rendered
    expect(getByText("Checkout")).toBeTruthy();

    // Check that all product names are rendered
    products.forEach((product) => {
      expect(getByText(product.name)).toBeTruthy();
    });

    // Check initial total price is calculated correctly (sum of price * quantity)
    const initialTotal = products.reduce((sum, p) => sum + p.price, 0);
    expect(getByText(`${initialTotal.toFixed(2)} €`)).toBeTruthy();
  });

  test("increments product quantity when increment button is pressed", () => {
    const { getAllByTestId, getByText } = render(<CheckoutScreen />);

    // Find all increment buttons by testID (assumed to be set in CheckoutItem)
    const incrementButtons = getAllByTestId("increment-button");
    expect(incrementButtons.length).toBe(products.length);

    // Press increment on first product
    fireEvent.press(incrementButtons[0]);

    // New total should be increased by price of first product
    const updatedTotal = products.reduce((sum, p, i) => {
      if (i === 0) return sum + p.price * 2; // quantity 2 after increment
      return sum + p.price;
    }, 0);

    expect(getByText(`${updatedTotal.toFixed(2)} €`)).toBeTruthy();
  });

  test("decrements product quantity but never below 1", () => {
    const { getAllByTestId, getByText } = render(<CheckoutScreen />);

    // Find all decrement buttons by testID (assumed to be set in CheckoutItem)
    const decrementButtons = getAllByTestId("decrement-button");
    expect(decrementButtons.length).toBe(products.length);

    // Press decrement on first product (should not go below 1)
    fireEvent.press(decrementButtons[0]);
    fireEvent.press(decrementButtons[0]);

    // Total should be equal to initial total because quantity remains at 1
    const initialTotal = products.reduce((sum, p) => sum + p.price, 0);
    expect(getByText(`${initialTotal.toFixed(2)} €`)).toBeTruthy();
  });

  test("updates quantity display when incrementing and decrementing", () => {
    const { getAllByTestId } = render(<CheckoutScreen />);

    // Get quantity text elements by testID (assumed "quantity-text")
    const quantityTexts = getAllByTestId("quantity-text");

    // Initially quantity should be 1
    expect(quantityTexts[0].props.children).toBe(1);

    // Increment first product quantity
    fireEvent.press(getAllByTestId("increment-button")[0]);
    expect(quantityTexts[0].props.children).toBe(2);

    // Decrement back to 1
    fireEvent.press(getAllByTestId("decrement-button")[0]);
    expect(quantityTexts[0].props.children).toBe(1);
  });
});
