import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" />
    </Stack>
  );
};

export default RootLayout;
