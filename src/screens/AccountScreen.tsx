import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import HeaderTitle from "../components/HeaderTitle";
import { Ionicons } from "@expo/vector-icons";
import { menuItems } from "../mockData/accountMenuList";

const AccountScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Custom header component displaying screen title */}
      <HeaderTitle title="Account" />

      {/* ScrollView to allow vertical scrolling if content overflows */}
      <ScrollView contentContainerStyle={styles.container}>
        {/* Profile section with avatar and user name */}
        <View style={styles.profileSection}>
          <Image
            testID="profile-avatar"
            source={require("../../assets/images/profile/profile-1.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Ibrahim</Text>
        </View>

        {/* Menu list section */}
        <View style={styles.menuSection}>
          {/* Map through menuItems to render each as a touchable menu item */}
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={item.onPress}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel={item.title}
            >
              {/* Icon on the left side */}
              <Ionicons
                name={item.iconName}
                size={22}
                color="#555"
                style={styles.menuIcon}
              />
              {/* Menu item text */}
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexGrow: 1,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    fontSize: 22,
    fontWeight: "200",
    marginTop: 15,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: 16,
  },
  menuSection: {
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
  },
});
