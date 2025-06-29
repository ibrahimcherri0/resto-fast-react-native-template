import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      {/* Search icon displayed inside the input container */}
      <FontAwesome name="search" size={18} color="#888" style={styles.icon} />
      {/* TextInput for user to type their search query */}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default SearchBar;
