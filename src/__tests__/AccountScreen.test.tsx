import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AccountScreen from "../screens/AccountScreen";
import { menuItems } from "../mockData/accountMenuList";

// Mock the Ionicons component to avoid rendering issues in tests
jest.mock("@expo/vector-icons", () => {
  return {
    Ionicons: () => null,
  };
});

describe("AccountScreen", () => {
  test("renders the correct number of menu items", () => {
    const { getAllByRole } = render(<AccountScreen />);

    // We expect the number of buttons to equal the length of menuItems
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(menuItems.length);
  });

  test("each menu item has correct accessibility label and text", () => {
    const { getAllByRole, getByText } = render(<AccountScreen />);

    menuItems.forEach((item) => {
      // Check if a button with the correct accessibility label exists
      expect(
        getAllByRole("button").some(
          (btn) => btn.props.accessibilityLabel === item.title
        )
      ).toBe(true);
      // Check if the menu text is rendered
      expect(getByText(item.title)).toBeTruthy();
    });
  });
});
