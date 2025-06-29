import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const ChatHeader = () => (
  <View style={styles.header}>
    {/* Profile image */}
    <Image
      source={require("../../assets/images/profile/profile-2.jpg")}
      style={styles.avatar}
    />

    {/* User info: name and role */}
    <View>
      <Text style={styles.name}>Maxime</Text>
      <Text style={styles.subtitle}>Customer Service</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: "#ddd",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
  },
});

export default ChatHeader;
