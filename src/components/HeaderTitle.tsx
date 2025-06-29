import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      {/* Display the title passed as a prop */}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
});

export default HeaderTitle;
