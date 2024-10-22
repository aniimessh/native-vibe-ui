import { useState, useEffect } from "react";
import {
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
  Easing,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const THEME_KEY = "theme";

export const usePersistedTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationValue] = useState(new Animated.Value(0)); // Animation value for controlling the spread effect
  const [fadeAnimation] = useState(new Animated.Value(1)); // Animation value for fade effect

  // Load saved theme from AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme !== null) {
          setIsDarkMode(storedTheme === "dark");
        }
      } catch (error) {
        console.error("Error loading theme from storage:", error);
      }
    };
    loadTheme();
  }, []);

  // Save theme to AsyncStorage
  const saveTheme = async (theme: string) => {
    try {
      await AsyncStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.error("Error saving theme:", error);
    }
  };

  // Toggle theme with a fade animation
  const toggleTheme = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    // Start the fade out animation (fade to 0 opacity)
    Animated.timing(fadeAnimation, {
      toValue: 0, // Fade out (invisible)
      duration: 300, // Duration of the fade
      easing: Easing.ease, // Easing for smoothness
      useNativeDriver: true,
    }).start(() => {
      // After fade out is done, switch the theme and fade in
      const newTheme = !isDarkMode ? "dark" : "light";
      setIsDarkMode(!isDarkMode);
      saveTheme(newTheme);

      // Fade in the new theme
      Animated.timing(fadeAnimation, {
        toValue: 1, // Fade in (fully visible)
        duration: 300, // Duration of the fade in
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    });
  };

  return { isDarkMode, toggleTheme, fadeAnimation };
};
