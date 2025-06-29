import { Image, StyleSheet, View, Text } from "react-native";
import CardTitle from "./CardTitle";

const PromoImage: React.FC = () => {
  return (
    <View style={{ marginTop: 10 }}>
      {/* Section title */}
      <CardTitle title="Today's Promo" />
      {/* Container for the promo image */}
      <View style={styles.container}>
        {/* Promotional image with stretch resize mode to fill the container */}
        <Image
          source={require("../../assets/images/promoImage.webp")}
          style={styles.avatar}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginHorizontal: 20,
    marginTop: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
});

export default PromoImage;
