import type React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Typography from "./Typography";

type ButtonProps = {
  // Important props
  children: React.ReactNode;
  // Optional props
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  style?: object;
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode; // Allow any type of React node for icon
  iconPosition?: "left" | "right";
  variant?: "primary" | "link"; // Fixed typo from 'vairant' to 'variant'
  activeOpacity?: number;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
  loading = false,
  loadingText,
  size = "md", // Default size
  style,
  variant, // Fixed typo here
  activeOpacity,
}) => {
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  // Determine base styles based on variant
  const variantStyles = (() => {
    switch (variant) {
      case "primary":
        return "bg-black text-white";
      case "link":
        return "bg-transparent"; // No background for link variant
      default:
        return ""; // Default case if no variant is provided
    }
  })();

  return (
    <TouchableWithoutFeedback disabled={disabled}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={style}
        className={`${className} ${
          disabled ? "opacity-50" : ""
        } ${variantStyles} flex-row justify-center ${
          size === "sm"
            ? "py-1 px-1"
            : size === "md"
            ? "py-2 px-2"
            : size === "lg"
            ? "py-4 px-4"
            : ""
        } rounded`}
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        accessible
        accessibilityLabel={loading ? loadingText : String(children)}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <View className="flex flex-row items-center">
            {icon && iconPosition === "left" && (
              <>
                {icon}
                <Typography
                  className={variant === "primary" ? "text-white" : ""}
                >
                  {children}
                </Typography>
              </>
            )}
            {!icon && (
              <Typography className={variant === "primary" ? "text-white" : ""}>
                {children}
              </Typography>
            )}
            {icon && iconPosition === "right" && (
              <>
                <Typography
                  className={variant === "primary" ? "text-white" : ""}
                >
                  {children}
                </Typography>
                {icon}
              </>
            )}
          </View>
        )}
        {/* Render loading text if provided */}
        {loadingText && !loading && <Typography>{loadingText}</Typography>}
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

export default Button;
