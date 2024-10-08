import type React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Typography from "./Typography";

// Define the props for the Button component
type ButtonProps = {
  // Required children prop to display button text or elements
  children: React.ReactNode;
  // Optional callback function to handle button press
  onPress?: () => void;
  // Optional flag to disable the button
  disabled?: boolean;
  // Optional class name for additional styling
  className?: string;
  // Optional inline styles
  style?: object;
  // Optional size variant for the button
  size?: "sm" | "md" | "lg";
  // Optional loading state flag
  loading?: boolean;
  // Optional text to display while loading
  loadingText?: string;
  // Optional icon to display on the button
  icon?: React.ReactNode;
  // Optional position of the icon (left or right)
  iconPosition?: "left" | "right";
  // Optional variant type for styling (primary or link)
  variant?: "primary" | "link";
  // Optional active opacity value for touch feedback
  activeOpacity?: number;
};

// Define the Button component
const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
  loading = false,
  loadingText,
  size = "md",
  style,
  variant,
  activeOpacity,
}) => {
  
  // Handle button press event
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };

  // Determine styles based on the variant prop
  const variantStyles = (() => {
    switch (variant) {
      case "primary":
        return "bg-black text-white"; // Styles for primary button
      case "link":
        return "bg-transparent"; // Styles for link button
      default:
        return ""; // Default styles if no variant is specified
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
            ? "py-1 px-1" // Small button padding
            : size === "md"
            ? "py-2 px-2" // Medium button padding
            : size === "lg"
            ? "py-4 px-4" // Large button padding
            : ""
        } rounded`}
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        accessible
        accessibilityLabel={loading ? loadingText : String(children)}
      >
        {loading ? (
          <ActivityIndicator size="small" /> // Show loading spinner if loading is true
        ) : (
          <View className="flex flex-row items-center">
            {icon && iconPosition === "left" && (
              <>
                {icon} {/* Render icon on the left */}
                <Typography className={variant === "primary" ? "text-white" : ""}>
                  {children} {/* Render button text */}
                </Typography>
              </>
            )}
            {!icon && (
              <Typography className={variant === "primary" ? "text-white" : ""}>
                {children} {/* Render button text without icon */}
              </Typography>
            )}
            {icon && iconPosition === "right" && (
              <>
                <Typography className={variant === "primary" ? "text-white" : ""}>
                  {children} {/* Render button text */}
                </Typography>
                {icon} {/* Render icon on the right */}
              </>
            )}
          </View>
        )}
        {/* Render loading text if provided and not in loading state */}
        {loadingText && !loading && <Typography>{loadingText}</Typography>}
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

export default Button;