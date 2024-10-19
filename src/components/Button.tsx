import type React from "react";
import { Pressable, StyleSheet } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: object;
  disabled?: boolean;
  onPress?: () => unknown;
  variant?: "primary" | "icon" | "outlined" | "link";
};

const Button = ({
  children,
  className = "",
  style,
  disabled,
  onPress,
  variant,
}: ButtonProps) => {
  const variantStyle = (() => {
    switch (variant) {
      case "primary":
        return "bg-black text-white";
      case "icon":
        return "bg-transparent px-2 py-2";
      case "outlined":
        return "bg-transparent border border-black";
      default:
        return "";
    }
  })();

  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      className={`${variantStyle} ${className}`}
      style={[styles.default, style]}
      disabled={disabled}
      onPress={handlePress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default Button;
