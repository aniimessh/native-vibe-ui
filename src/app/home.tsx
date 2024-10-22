import { Animated } from "react-native";
import React from "react";
import Typography from "../components/Typography";
import { usePersistedTheme } from "../hooks/usePersistedTheme";

const Home = () => {
  const { isDarkMode, toggleTheme, fadeAnimation } = usePersistedTheme();

  const containerClass = isDarkMode ? "bg-black" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-black";
  return (
    <Animated.View
      style={{ opacity: fadeAnimation }} // Apply fade animation to the container
      className={`flex-1 items-center justify-center ${containerClass}`}
    >
      <Typography className={`${isDarkMode ? "text-white" : "text-black"}`}>
        Home Page
      </Typography>
    </Animated.View>
  );
};

export default Home;
