import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { useState } from "react";
import Typography from "./src/components/Typography";
import React from "react";

export default function App() {
  const [loading, setloading] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        className="border"
        onPress={() => console.log("Pressed")}
        size="sm"
        variant="link"
        activeOpacity={1}
      >
        <Typography className="tracking-widest">Go back</Typography>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
