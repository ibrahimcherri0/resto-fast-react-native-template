import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Message } from "../types/chat";
import { COLORS } from "../constants/colors";

type Props = {
  message: Message;
};

const ChatMessage = ({ message }: Props) => (
  <View
    style={[
      styles.messageBubble,
      message.fromMe ? styles.myMessage : styles.theirMessage,
    ]}
  >
    {/* Display the text content of the message */}
    <Text testID="chat-message" style={styles.messageText}>
      {message.text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  messageBubble: {
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    maxWidth: "80%",
  },
  myMessage: {
    backgroundColor: COLORS.primary,
    alignSelf: "flex-end",
  },
  theirMessage: {
    backgroundColor: "#eee",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatMessage;
