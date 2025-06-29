import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

// Props definition for input state management and message sending
type Props = {
  inputText: string;
  setInputText: (text: string) => void;
  sendMessage: () => void;
};

const ChatInput = ({ inputText, setInputText, sendMessage }: Props) => (
  <View style={styles.inputContainer}>
    {/* Text input for typing a message */}
    <TextInput
      testID="chat-input"
      style={styles.input}
      value={inputText}
      onChangeText={setInputText}
      placeholder="Write a message"
      returnKeyType="send"
      onSubmitEditing={sendMessage}
    />
    {/* Send button with an icon */}
    <TouchableOpacity
      onPress={sendMessage}
      style={styles.button}
      testID="send-button"
    >
      <Ionicons name="send" size={28} color={COLORS.primary} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 44,
  },
  button: {
    padding: 5,
    borderRadius: 10,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});

export default ChatInput;
