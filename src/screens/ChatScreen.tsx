import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { Message } from "../types/chat";
import { initialMessages } from "../mockData/messages";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatHeader from "../components/ChatHeader";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState<string>("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      fromMe: true,
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* KeyboardAvoidingView moves UI up when keyboard is shown to avoid covering inputs */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"padding"} // Moves content up by padding the container
        keyboardVerticalOffset={5}
      >
        {/* Custom header component for chat screen */}
        <ChatHeader />

        {/* FlatList efficiently renders the list of messages */}
        <FlatList
          data={messages}
          renderItem={({ item }) => <ChatMessage message={item} />}
          keyExtractor={(item) => item.id} // Unique key for each message
          contentContainerStyle={styles.messageContainer} // Styling for messages container
        />

        {/* Input area to type and send new messages */}
        <ChatInput
          inputText={inputText}
          setInputText={setInputText}
          sendMessage={sendMessage}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  messageContainer: {
    padding: 14,
    flexGrow: 1,
  },
});

export default ChatScreen;
