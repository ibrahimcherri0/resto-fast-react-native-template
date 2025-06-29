import { Alert } from "react-native";
import { MenuItem } from "../types/account";

// each item includes a title, icon name, and an onPress handler that triggers an alert
export const menuItems: MenuItem[] = [
  {
    title: "Edit Profile",
    iconName: "person-outline",
    onPress: () => Alert.alert("Edit Profile"),
  },
  {
    title: "Settings",
    iconName: "settings-outline",
    onPress: () => Alert.alert("Settings"),
  },
  {
    title: "Help",
    iconName: "help-circle-outline",
    onPress: () => Alert.alert("Help"),
  },
  {
    title: "Logout",
    iconName: "log-out-outline",
    onPress: () => Alert.alert("Logout"),
  },
];