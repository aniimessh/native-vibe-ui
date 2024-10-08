import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import { useState } from "react";
import Typography from "./src/components/Typography";
import React from "react";
import Input from "./src/components/Input";

export default function App() {
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    setloading(true);
    setInterval(() => {
      setloading(false);
    }, 3000);
    console.log(email);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      {/* input */}
      <View className="my-5">
        <Input
          placeholder="Enter your email"
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
        >
          <Typography className="mb-1">Email</Typography>
        </Input>
      </View>
      {/* button */}
      <Button
        className={`${loading && "opacity-90"} px-2 py-3`}
        onPress={onSubmit}
        size="lg"
        variant="link"
        activeOpacity={1}
        disabled={loading}
        loading={loading}
        loadingText="Sending..."
      >
        <Typography className="tracking-widest">Submit</Typography>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
});
