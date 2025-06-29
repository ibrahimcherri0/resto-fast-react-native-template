import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTopBar from "../components/HomeTopBar";
import SearchBar from "../components/SearchBar";
import PromoImage from "../components/PromoImage";
import CategoriesList from "../components/CategoriesList";
import { ScrollView } from "react-native-gesture-handler";
import PopularNow from "../components/PopularNow";
import { COLORS } from "../constants/colors";
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top home bar */}
      <HomeTopBar />

      {/* ScrollView allows vertical scrolling of the main home content */}
      <ScrollView>
        {/* Search bar for searching items*/}
        <SearchBar />

        {/* Promotional banner image section */}
        <PromoImage />

        {/* List of food categories displayed horizontally */}
        <CategoriesList />

        {/* Section showcasing popular food items */}
        <PopularNow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});
