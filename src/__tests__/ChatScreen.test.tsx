import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ChatScreen from "../screens/ChatScreen";

describe("ChatScreen", () => {
  // Test that a message is added to the list and the input is cleared after sending
  test("adds a message to the list and clears the input after sending", () => {
    const { getByTestId, getAllByTestId } = render(<ChatScreen />);
    const input = getByTestId("chat-input");
    // The send button in ChatInput with testID="send-button"
    const sendBtn = getByTestId("send-button");

    fireEvent.changeText(input, "Test message");
    fireEvent.press(sendBtn);

    // The input should be cleared after sending the message
    expect(input.props.value).toBe("");

    // The last message in the list should contain "Test message"
    const messages = getAllByTestId("chat-message");
    expect(messages[messages.length - 1].props.children).toContain(
      "Test message"
    );
  });

  // Test that nothing happens if the input is empty when sending
  test("does nothing if the input is empty", () => {
    const { getByTestId, queryAllByTestId } = render(<ChatScreen />);
    const initialCount = queryAllByTestId("chat-message").length;

    fireEvent.press(getByTestId("send-button"));

    // The number of messages should remain the same
    const finalCount = queryAllByTestId("chat-message").length;
    expect(finalCount).toBe(initialCount);
  });

  // Test that the input text updates correctly when typing
  test("updates the input text when typing", () => {
    const { getByTestId } = render(<ChatScreen />);
    const input = getByTestId("chat-input");
    fireEvent.changeText(input, "New message");
    expect(input.props.value).toBe("New message");
  });
});
