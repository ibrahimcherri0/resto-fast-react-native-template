import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const HomeTopBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* App logo or avatar image */}
      <Image source={require("../../assets/icon.png")} style={styles.avatar} />

      {/* Center section showing location icon and text */}
      <View style={styles.centerContent}>
        <Ionicons
          name="location"
          size={25}
          color={COLORS.primary}
          style={styles.icon}
        />
        <Text style={styles.centerText}>Paris, France</Text>
      </View>

      {/* Call icon on the right side */}
      <Ionicons name="call-outline" size={25} color={COLORS.textPrimary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  centerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  centerText: {
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default HomeTopBar;
