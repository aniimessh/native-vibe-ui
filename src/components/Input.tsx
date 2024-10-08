import {
  View,
  TextInput,
  type TextInputProps,
  type ViewStyle,
  type StyleProp,
} from "react-native";
import type React from "react";

type InputProps = {
  placeholder?: string;
  className?: string; 
  style?: StyleProp<ViewStyle>;
  onChangeText?: (value: string) => void;
  keyboardType?: TextInputProps["keyboardType"];
  secureTextEntry?: boolean;
  defaultValue?: string;
  value?: string; 
  maxLength?: number;
  editable?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  numberOfLines?: number; // Used for multiline inputs
  returnKeyType?: TextInputProps["returnKeyType"];
  onSubmitEditing?: TextInputProps["onSubmitEditing"];
  blurOnSubmit?: boolean;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoCorrect?: boolean;
  textAlign?: TextInputProps["textAlign"];
  selectionColor?: string;
  placeholderTextColor?: string;
  importantForAccessibility?: TextInputProps["importantForAccessibility"];
  textContentType?: TextInputProps["textContentType"];
  children?: React.ReactNode; // If you want to render custom elements around the input
};

const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  style,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  defaultValue,
  value,
  maxLength,
  editable = true,
  autoFocus = false,
  multiline = false,
  numberOfLines,
  returnKeyType,
  onSubmitEditing,
  blurOnSubmit = true,
  autoCapitalize = "none",
  autoCorrect = false,
  textAlign = "left",
  selectionColor,
  placeholderTextColor = "#888", // Default light gray
  importantForAccessibility = "auto",
  textContentType,
  children,
}) => {
  return (
    <>
      {children}
      <TextInput
        className={`border border-gray-600  px-2 py-1 rounded-sm ${className}`}
        placeholder={placeholder}
        style={style}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        defaultValue={defaultValue}
        value={value}
        maxLength={maxLength}
        editable={editable}
        autoFocus={autoFocus}
        multiline={multiline}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        textAlign={textAlign}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        importantForAccessibility={importantForAccessibility}
        textContentType={textContentType}
      />
    </>
  );
};

export default Input;
