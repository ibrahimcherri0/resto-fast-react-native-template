import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const CardTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.title}>
      <Text style={styles.leftText}>{title}</Text>
      {/* Static "See All" text – can later be made clickable or dynamic */}
      <Text style={styles.rightText}>See All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  leftText: {
    fontSize: 18,
    color: COLORS.textPrimary,
    fontWeight: "bold",
  },
  rightText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});

export default CardTitle;
