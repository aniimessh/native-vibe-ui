import React from "react";
import { View, Platform, Animated, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Typography from "../components/Typography";
import { usePersistedTheme } from "../hooks/usePersistedTheme";
import { router } from "expo-router";

// Choose the appropriate container based on the platform
const Container = Platform.OS === "web" ? View : SafeAreaView;

export default function App() {
  const { isDarkMode, toggleTheme, fadeAnimation } = usePersistedTheme();

  const containerClass = isDarkMode ? "bg-black" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-black";

  return (
    <Animated.View
      style={{ opacity: fadeAnimation }} // Apply fade animation to the container
      className={`flex-1 items-center justify-center ${containerClass}`}
    >
      <View className="flex flex-col gap-y-4 items-center">
        {/* Icon Button for toggling theme */}
        <Button onPress={toggleTheme} variant="icon">
          <FontAwesome
            name={isDarkMode ? "sun-o" : "moon-o"}
            size={20}
            color={isDarkMode ? "white" : "black"}
          />
        </Button>

        {/* Primary Button */}
        <Button
          variant="primary"
          className={`${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }}`}
        >
          <Typography className={`${isDarkMode ? "text-black" : "text-white"}`}>
            Primary Button
          </Typography>
        </Button>

        {/* Outlined Button */}
        <Button
          variant="outlined"
          className={`${isDarkMode ? "border-white text-black" : ""}}`}
        >
          <Typography className={textClass}>Outlined Button</Typography>
        </Button>

        {/* Link Button */}
        <Button onPress={() => router.push("/home")} variant="link">
          <Typography className={textClass}>Go to Home</Typography>
        </Button>
      </View>
      
    </Animated.View>
  );
}
