import { Ionicons } from "@expo/vector-icons";

export type MenuItem = {
  title: string;
  iconName: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};