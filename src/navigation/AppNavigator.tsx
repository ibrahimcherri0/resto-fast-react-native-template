import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ChatScreen from "../screens/ChatScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import AccountScreen from "../screens/AccountScreen";
import { COLORS } from "../constants/colors";

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Custom button component for the central "Cart" tab
function CustomTabBarButton({ children, onPress }: any) {
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.customButton}>{children}</View>
    </TouchableOpacity>
  );
}

// Main navigation component of the app
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hides the header for each screen
          tabBarShowLabel: false, // Hides the text label for each tab
          tabBarStyle: styles.tabBarStyle, // Custom style for the tab bar

          // Custom icons for each tab based on the route name and focus state
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Account") {
              return (
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "OrderHistory") {
              return (
                <Ionicons
                  name={focused ? "receipt" : "receipt-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Chat") {
              return (
                <Ionicons
                  name={
                    focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            }
            return null;
          },

          // Colors for active/inactive icons
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "#aaa",

          // Custom pressable wrapper for all tab buttons (except Cart)
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <Pressable
              android_ripple={undefined}
              onPress={props.onPress}
              onLongPress={props.onLongPress}
              accessibilityRole={props.accessibilityRole}
              accessibilityState={props.accessibilityState}
              accessibilityLabel={props.accessibilityLabel}
              testID={props.testID}
              style={props.style}
            >
              {props.children}
            </Pressable>
          ),
        })}
      >
        {/* Each screen corresponds to a tab in the navigator */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />

        {/* The "Cart" screen uses a custom floating button in the center */}
        <Tab.Screen
          name="Cart"
          component={CheckoutScreen}
          options={{
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}>
                <Ionicons name="bag" size={32} color={COLORS.white} />
              </CustomTabBarButton>
            ),
          }}
        />

        <Tab.Screen name="OrderHistory" component={OrderHistoryScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  customButtonContainer: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
      },
    }),
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
