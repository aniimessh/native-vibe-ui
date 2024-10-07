import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { useState } from "react";
import Typography from "./src/components/Typography";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  const [loading, setloading] = useState(true);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        className=""
        onPress={() => console.log("Pressed")}
        icon={<Icon name="arrow-back" size={12} color="white" />}
        iconPosition="left"
        size="lg"
        disabled
        variant="link"
        // loading
        activeOpacity={1}
      >
        <Typography className="font-bold tracking-widest">Go back</Typography>
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
