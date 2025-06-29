import { View, Image, StyleSheet, Text } from "react-native";
import { categoriesList } from "../mockData/categoriesList";
import CardTitle from "./CardTitle";

const CategoriesList: React.FC = () => {
  return (
    <View style={styles.container}>
      <CardTitle title="Categories" />

      {/* Render each category as an image and label */}
      <View style={styles.categories}>
        {categoriesList.map((category, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={category.image} style={styles.image} />
            <Text>{category.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 70,
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  imageWrapper: {
    width: "25%",
    aspectRatio: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
    marginVertical: 10,
    padding: 10,
  },
});

export default CategoriesList;
