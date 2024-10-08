import type React from "react";
import {
  ActivityIndicator,
  type StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  type ViewStyle,
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
  style?: StyleProp<ViewStyle>;
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
  loadingText, // Default loading text
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
          <View className="flex flex-row items-center gap-x-4">
            <Typography
              className={variant === "primary" ? "text-white" : "text-black"}
            >
              {loadingText}
            </Typography>
            <ActivityIndicator size="small" />
          </View>
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
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

export default Button;
