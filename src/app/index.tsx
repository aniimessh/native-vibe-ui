import type React from "react";
import {
  View,
  Platform,
  ActivityIndicator,
  Alert,
  ToastAndroid,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Typography from "../components/Typography";
import { router } from "expo-router";

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
          onPress={() =>
            ToastAndroid.show("Icon Button clicked", ToastAndroid.SHORT)
          }
          variant="icon"
        >
          <Ionicons name="add" size={20} />
        </Button>

        {/* Primary Button */}
        <Button
          onPress={() => onSubmit("primary")}
          variant="primary"
          disabled={loadingStates.primary}
          className={`${loadingStates.primary ? "opacity-50" : ""} rounded-md`} // Adjust opacity when loading
        >
          <Typography className="text-white">Primary</Typography>
        </Button>

        {/* Outlined Button */}
        <Button
          onPress={() => onSubmit("outlined")}
          variant="outlined"
          disabled={loadingStates.outlined}
          className="rounded-md w-[200px]"
        >
          <Typography className="text-black text-center">
            {loadingStates.outlined ? (
              <ActivityIndicator size={"small"} />
            ) : (
              "Outlined Button"
            )}
          </Typography>
        </Button>

        {/* Link Button */}
        <Button onPress={() => router.push("/home")} variant="link">
          <Typography className="text-black">Go to Home</Typography>
        </Button>
      </View>
      <StatusBar style="auto" />
    </Container>
  );
}
