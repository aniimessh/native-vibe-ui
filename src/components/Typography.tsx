import { StyleSheet, Text, View } from "react-native";
import type React from "react";

type TypographyProps = {
  children: React.ReactNode;
  style?: object;
  className?: string;
};

const Typography = ({ children, style, className }: TypographyProps) => {
  return (
    <Text style={style} className={className}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({});
