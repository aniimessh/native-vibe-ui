import type React from "react";
import { Pressable, StyleSheet } from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: object;
  disabled?: boolean;
  onPress?: () => unknown;
  variant?: "primary" | "icon" | "outlined" | "link";
  onLongPress?: () => unknown;
  android_disableSound?: boolean
};

const Button = ({
  children,
  className = "",
  style,
  disabled,
  onPress,
  variant,
  onLongPress,
  android_disableSound
}: ButtonProps) => {
  const variantStyle = (() => {
    switch (variant) {
      case "primary":
        return `${disabled ? "opacity-50" : ""} bg-black text-white`;
      case "icon":
        return `${disabled ? "opacity-50" : ""} bg-transparent px-2 py-2`;
      case "outlined":
        return `${
          disabled ? "opacity-50" : ""
        } bg-transparent border border-black`;
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
      onLongPress={onLongPress}
      android_disableSound={android_disableSound}
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
