import type React from "react";
import { View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./src/components/Button";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Typography from "./src/components/Typography";

// Choose the appropriate container based on the platform
const Container = Platform.OS === "web" ? View : SafeAreaView;

export default function App() {
  // State to manage loading status for each button variant
  const [loadingStates, setLoadingStates] = useState({
    primary: false,
    outlined: false,
  });

  // Function to handle button submission
  const onSubmit = (variant: keyof typeof loadingStates) => {
    console.log(`${variant} Button clicked`);

    // Set the specific button's loading state to true
    setLoadingStates((prev) => ({ ...prev, [variant]: true }));
    console.log(`${variant} Button Loading`);

    // Simulate a loading process
    return setTimeout(() => {
      console.log(`${variant} Loading finished`);
      // Reset the specific button's loading state after 3 seconds
      setLoadingStates((prev) => ({ ...prev, [variant]: false }));
    }, 3000);
  };

  return (
    <Container className="flex-1 items-center justify-center">
      <View className="flex flex-col gap-y-4 items-center">
        {/* Icon Button */}
        <Button
          onPress={() => console.log("Icon Button clicked")}
          variant="icon"
        >
          <Ionicons name="add" size={24} />
        </Button>

        {/* Primary Button */}
        <Button
          onPress={() => onSubmit("primary")}
          variant="primary"
          disabled={loadingStates.primary}
          className={`${loadingStates.primary ? "opacity-50" : ""}`} // Adjust opacity when loading
        >
          <Typography className="text-white">Primary</Typography>
        </Button>

        {/* Outlined Button */}
        <Button
          onPress={() => onSubmit("outlined")}
          variant="outlined"
          disabled={loadingStates.outlined}
        >
          <Typography className="text-black">Outlined</Typography>
        </Button>
      </View>
      <StatusBar style="auto" />
    </Container>
  );
}
