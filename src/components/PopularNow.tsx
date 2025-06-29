import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { items } from "../mockData/popularNowItem";
import CardTitle from "./CardTitle";

const PopularNow: React.FC = () => {
  return (
    <View>
      {/* Title of the section */}
      <CardTitle title="Popular Now" />

      {/* Horizontal scroll view to showcase items side by side */}
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false} // hides the scroll bar
      >
        {/* Map through items array and render each as a card */}
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    width: 120,
    height: 150,
    marginRight: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    resizeMode: "cover",
  },
  text: {
    textAlign: "center",
  },
});

export default PopularNow;
